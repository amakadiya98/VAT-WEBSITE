import { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDirection } from '../context/DirectionContext';
const options = [
    {
        label: 'LTR',
        value: 'ltr',
        flagUrl: 'https://flagcdn.com/us.svg',
    },
    {
        label: 'RTL',
        value: 'rtl',
        flagUrl: 'https://flagcdn.com/sa.svg',
    },
];

const LanguageSwitcher = () => {
     const { dir, setDir } = useDirection();
    const [direction, setDirection] = useState('ltr');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("dir", direction);
    }, [direction]);


    const selected = options.find(opt => opt.value === direction);

    return (
        <div className={`relative inline-block`}>
            <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-2 border border-none px-0 py-0 rounded bg-transparent focus:outline-none"
            >
                <img src={selected.flagUrl} alt="flag" className="w-6 h-4 rounded object-cover" />
                <span className='font-inter-medium text-black dark:text-white tracking-[-3%]'>{selected.label}</span>
                <span><RiArrowDropDownLine size={30} /></span>
            </button>

            {open && (
                <div className="absolute z-10 mt-2 min-w-[70px] bg-white dark:bg-black border-none text-black dark:text-white rounded shadow-lg">
                    {options.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => {
                                setDir(opt.value);
                                setDirection(opt.value);
                                setOpen(false);
                            }}
                            className="flex items-center w-full gap-2 px-4 py-2"
                        >
                            <img src={opt.flagUrl} alt={opt.label} className="w-6 h-4 rounded object-cover" />
                            <span>{opt.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;

