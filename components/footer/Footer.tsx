export default function Footer() {
    return (
        <footer className="bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.06)]">
            {/* Desktop footer */}
            <div className="hidden md:flex px-12 py-2 justify-center items-center">
                <div className="text-neutral-700 text-base font-normal font-['Inter']">
                    © 2024 Eventity SRL
                </div>
                <div className="flex-1" />
                <div className="flex items-center space-x-4 text-neutral-700 text-base font-normal font-['Inter']">
                    <span className="cursor-pointer">Politică de confidențialitate</span>
                    <div className="w-1 h-1 bg-neutral-700 rounded-full" />
                    <span className="cursor-pointer">Termeni și condiții</span>
                </div>
            </div>

            {/* Mobile footer */}
            <div className="flex md:hidden flex-col items-center py-4 text-neutral-700 text-sm font-medium space-y-2">
                <div className="flex items-center space-x-2">
                    <span className="cursor-pointer">Confidențialitate</span>
                    <span className="text-xl leading-none">·</span>
                    <span className="cursor-pointer">Termeni și condiții</span>
                </div>
            </div>
        </footer>
    );
}
