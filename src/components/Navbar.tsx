import { MdAllInbox, MdPerson, MdWbSunny } from 'react-icons/md';
import Link from 'next/link';

interface INavbutton {
    reference: string
    icon: 'Inbox' | 'Person' | 'Sunny'
}

const Navbutton = ({reference, icon}:INavbutton) => {
    const Icon = () => icon == 'Inbox'? 
    <MdAllInbox className="w-[2rem] h-[2rem] text-white"/>:
    icon == 'Person' ?
    <MdPerson className="w-[2rem] h-[2rem] text-white"/>:
    icon == 'Sunny' ?
    <MdWbSunny className="w-[2rem] h-[2rem] text-white"/>:
    <></>

    return (
        <Link href="/" passHref style={{ textDecoration: 'none', color: 'white' }}>
            <div className = "rounded-2xl border-white border-[1px] p-[5px] mr-2">
                <Icon/>
            </div>
        </Link>
    )
}

const Navbar = () =>{
    return (
        <div className="flex h-[80px] w-full bg-black sticky pl-[2rem] pr-[3rem]">
            <div className = "hidden md:block font-[1rem] tracking-[3px] font-body my-auto">
                Gratitude@GovTech
            </div>
            <div className = "block md:hidden font-[1rem] tracking-[3px] font-body my-auto">
                Gratitude<br/>@GovTech
            </div>
            <div className="flex my-auto w-[7rem] ml-auto">
                <Navbutton reference={"/"} icon = 'Sunny'/>
                <Navbutton reference={"/"} icon = 'Inbox'/>
                <Navbutton reference={"/"} icon = 'Person'/>
            </div>
        </div>
    )
}

export default Navbar;