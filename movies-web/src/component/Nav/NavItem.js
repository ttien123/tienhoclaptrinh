function NavItem({ item }) {
    const { label, icon, active } = item;
    console.log(item);

    return (
        <li className={`flex p-2 justify-end items-center cursor-pointer ${active ? 'bg-primary text-white' : ''}`}>
            <h3 className="mr-2 ">{label}</h3>
            {icon}
        </li>
    );
}

export default NavItem;
