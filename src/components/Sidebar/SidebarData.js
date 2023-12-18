import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export const SidebarData = [
    {
        Title : 'Dashboard',
        Icon : <DashboardRoundedIcon />,
        Link : '/dashboard',
    },
    {
        Title : 'Campaigns',
        Icon : <LocalOfferRoundedIcon />,
        Link : '/campaigns',
    },
    {
        Title : 'Talent',
        Icon : <EmojiPeopleRoundedIcon />,
        Link : '/talent',
    },
    {
        Title : 'Analytics',
        Icon : <ShowChartRoundedIcon />,
        Link : '/analytics',
    },
    {
        Title : 'Settings',
        Icon : <SettingsRoundedIcon />,
        Link : '/settings',
    },
]