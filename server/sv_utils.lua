---@return table | any
LoadLeaderboard = function()
    local leaderboardJson = LoadResourceFile(GetCurrentResourceName(), "data.json")

    if not leaderboardJson then return Debug("[func:LoadLeaderboard] leaderboardJson is null.") end

    return json.decode(leaderboardJson)
end

SaveLeaderboard = function(newLeaderboardTable)
    SaveResourceFile(GetCurrentResourceName(), "data.json", json.encode(newLeaderboardTable, { indent = false }), -1)
end



---@param data FetchData
FetchWebhook = function(data)
    if not Config.Logging then return end

    if not data.webhook:find("https://") or not data.webhook then return Debug("[FetchWebhook] Invalid Webhook URL") end

    -- Convert to hexadecimal
    data.embed.color = tonumber(data.embed.color:gsub("#", ""), 16)

    data.embed.timestamp = os.date('!%Y-%m-%dT%H:%M:%S')
    data.embed.footer = { ['text'] = 'uxReports © 2024' }

    PerformHttpRequest(data.webhook, function(status, body, headers, errorData)
        if status == 204 then return end

        Debug(("Status: %s | Body: %s | Headers: %s | errorData: %s"):format(status, body, headers, errorData))
    end, 'POST', json.encode({
        username = "uxReports",
        avatar_url = "",
        embeds = { data.embed }
    }), { ["Content-Type"] = "application/json" })
end

---@param targetIdentifiers table
---@param sourceIdentifiers table
---@return boolean
LoopThroughIdentifiers = function(targetIdentifiers, sourceIdentifiers)
    if not targetIdentifiers or not sourceIdentifiers then
        return false
    end

    for _, targetIdentifier in ipairs(targetIdentifiers) do
        for _, sourceIdentifier in ipairs(sourceIdentifiers) do
            if string.find(targetIdentifier, sourceIdentifier) then
                Debug("Identifier found: ", targetIdentifier)
                return true
            end
        end
    end

    return false
end


ShowNotification = function(data)
    if not data then return Debug("[func:server:ShowNotification] first param is null.") end

    if not data.target then Debug("[func:server:ShowNotification] data.target is null.") end

    TriggerClientEvent("UIMessage", data.target, "nui:notify", data)
end

GetDiscordID = function(source)
    local returnValue = nil
    for idIndex = 1, GetNumPlayerIdentifiers(source) do
        if GetPlayerIdentifier(source, idIndex) ~= nil and GetPlayerIdentifier(source, idIndex):sub(1, #("discord:")) == "discord:" then
            returnValue = GetPlayerIdentifier(source, idIndex):gsub("discord:", "")
        end
    end
    return returnValue
end

---@param source any
---@return string
GetLicenseIdentifier = function(source)
    local returnValue = nil
    local identifiers = GetPlayerIdentifiers(source)

    for i = 1, #identifiers do
        local identifier = identifiers[i]
        if string.find(identifier, "license:") then
            returnValue = identifier:gsub("license:", "")
            break
        end
    end

    if not returnValue then
        Debug("[func:GetLicenseIdentifier] License couldn't be found.")
        return ""
    end

    return returnValue
end

GetPlayerIdentifiersWithoutIP = function(player)
    local identifiers = GetPlayerIdentifiers(player)
    local cleanedIdentifiers = {}
    for _, identifier in ipairs(identifiers) do
        if not string.find(identifier, "ip:") then
            table.insert(cleanedIdentifiers, identifier)
        end
    end
    return cleanedIdentifiers
end

-- Version checker for the git page
VersionCheck = function(repository)
    local resource = GetInvokingResource() or GetCurrentResourceName()

    local currentVersion = 'v1.1.9'

    if currentVersion then
        currentVersion = currentVersion:match('%d+%.%d+%.%d+')
    end

    if not currentVersion then
        return print(("^1Unable to determine current resource version for '%s' ^0"):format(
            resource))
    end

    SetTimeout(1000, function()
        PerformHttpRequest(('https://api.github.com/repos/%s/releases/latest'):format(repository),
            function(status, response)
                if status ~= 200 then return end

                response = json.decode(response)
                if response.prerelease then return end

                local latestVersion = response.tag_name:match('%d+%.%d+%.%d+')
                if not latestVersion or latestVersion == currentVersion then return end

                local cv = { string.strsplit('.', currentVersion) }
                local lv = { string.strsplit('.', latestVersion) }

                for i = 1, #cv do
                    local current, minimum = tonumber(cv[i]), tonumber(lv[i])

                    if current ~= minimum then
                        if current < minimum then
                            return print(('^3An update is available for %s (current version: %s)\r\n%s^0'):format(
                                resource, currentVersion, response.html_url))
                        else
                            break
                        end
                    end
                end
            end, 'GET')
    end)
end

if not LoadResourceFile(GetCurrentResourceName(), 'web/dist/index.html') then
    local err =
    'Unable to load UI. Build the NUI or download the latest release.\n https://github.com/userxx77/uxReports/releases/latest'
    print(err)
end

VersionCheck("userxx77/uxReports")
