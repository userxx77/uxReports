CPlayer = {}

function CPlayer:new(player)
    if not player then
        return Debug("(Error) `CPlayer:new` function was called but the first param is null.")
    end

    local isStaff = false

    local discordId = GetDiscordID(player)
    local playerName = GetPlayerName(player)
    local license = GetLicenseIdentifier(player)

    if not Config.UseDiscordRestAPI then
        if IsPlayerAceAllowed(player, Config.AcePerm) then
            isStaff = true
            Debug("OnlineStaff size: ", #OnlineStaff)
            OnlineStaff[tonumber(player)] = {
                id = player,
                license = license,
            }
            TriggerClientEvent("vadmin:cb:updatePermissions", player, Config.AllowedPermissions)
            Debug(("[func:CPlayer:new] (ACEPermissions) %s (ID - %s) was authenticated as staff."):format(
                playerName, player))
        end
    else
        local discordRoles = GetDiscordRoles(discordId, player)

        if discordRoles then
            for i = 1, #discordRoles do
                local discordRoleId = discordRoles[i]
                if Config.RoleIDs[discordRoleId] then
                    isStaff = true
                    OnlineStaff[tonumber(player)] = {
                        id = player,
                        license = license,
                    }
                    Debug(("[func:CPlayer:new] (DiscordAPI) %s (ID - %s) was authenticated as staff."):format(
                        playerName, player))
                end
            end
        end
    end

    local obj = {
        name = playerName,
        id = player,
        license = license,
        isStaff = isStaff,
    }

    TriggerClientEvent("reportmenu:state:playerdata", player, obj)

    setmetatable(obj, self)
    self.__index = self
    return obj
end
