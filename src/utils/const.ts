import CPULogo from "../../public/Electronics.svg";
import RamLogo from "../../public/SystemTask.svg";
import DiskLogo from "../../public/USBMemoryStick.svg";
import { Color } from "./color";
export const cardsList: any = [
    {
        name: "CPU",
        percentage: 0,
        color: Color.PRIMARY_BLUE,
        icon: CPULogo,
        average: 0,
        progressProps: {
            percent: 0,
            strokeColor: Color.PRIMARY_BLUE,
        },
        bgColor: Color.SECONDARY_BLUE,
    },
    {
        name: "RAM",
        percentage: 30,
        color: Color.PRIMARY_ORANGE,
        icon: RamLogo,
        average: 27,
        progressProps: { percent: 50, strokeColor: Color.PRIMARY_ORANGE },
        bgColor: Color.GRADIENT_ORANGE,
    },
    {
        name: "DISK",
        percentage: `0 GB`,
        color: Color.PRIMARY_BLUE,
        icon: DiskLogo,
        average: 0,
        progressProps: {
            percent: 0,
            strokeColor: Color.PURPLE,
        },
        bgColor: Color.SECONDARY_BLUE,
    },
    {
        name: "SERVICES",
        percentage: 30,
        color: Color.PRIMARY_RED,
        icon: RamLogo,
        average: 27,
        progressProps: { percent: 50, strokeColor: Color.PRIMARY_RED },
        bgColor: Color.CREAM,
    },
];