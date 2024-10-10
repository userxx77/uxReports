Config = {
    Debug = false,
    UseDiscordRestAPI = true, -- Replaces the ACE Permission System with one relying on the Discord REST API where players get their permissions based on their roles, make sure to configure the bot token and guild id in sv_config.lua
    AcePerm = "uxadmin.owner",  -- Uses the Deafult ACE Permission System, only works if you don't UseDiscordRestAPI set to true.
    MaxDistance = 20.0,        -- The max distance when reporting the nearest players.
    RoleIDs = {                -- Only Used if UseDiscordRestAPI is set to true, feel free to add multiple roles below using the example.
        ["1290265557534244905"] = true
    },
    Logging = true,               -- Enable Logging using discord Webhooks (Configurable in sv_config.lua)
    ReportCommand = "report",      -- The name of the report command for normal players.
    ReportMenuCommand = "reports", -- The name of the command to open the reports menu for staff members.
    NotificationPos =
    "top-right"                    
}
