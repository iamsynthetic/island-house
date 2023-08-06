import { gsap } from 'gsap'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

export const Menu = (props) => {
    
    const { onSectionChange, menuOpened, setMenuOpened } = props
    const btntl = gsap.timeline()

    const onMouseEnter = () => {
        gsap.to(".button-main-menu", {scaleX:.9, scaleY:.9, duration:.4, ease:'Back.easeInOut'})
        let rule = CSSRulePlugin.getRule(".button-main-menu"); //get the rule
        btntl.to(rule, {duration: .3, cssRule: {backgroundColor:"white"}, ease:'Circ.easeInOut'});
    }

    const onMouseLeave = () => {
        gsap.to(".button-main-menu", {scaleX:1, scaleY:1, duration:.4, ease:'Back.easeInOut'})
        let rule = CSSRulePlugin.getRule(".button-main-menu"); //get the rule
        btntl.to(rule, {duration: .3, cssRule: {backgroundColor:"#BF300F"}, ease:'Circ.easeInOut'});
    }

    const doSectionChange = (num) => {
        console.log('doSectionChange ' + num);

        onSectionChange(num)
    }

    return (
        <>
            <button 
                onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                onClick={() => setMenuOpened(!menuOpened)} 
                className="z-20 fixed top-12 right-12 p-3 button-main-menu w-11 h-11 rounded-md"
            >
                <div 
                    className={`button-main-menu-label h-0.5 rounded-md w-full transition-all
                    ${menuOpened ? "button-main-menu-label rotate-45 translate-y-0.5" : ""}`}
                />
                <div
                    className={`button-main-menu-label h-0.5 rounded-md w-full my-1
                    ${menuOpened ? "hidden" : ""}`}
                />
                <div 
                    className={`button-main-menu-label h-0.5 rounded-md w-full transition-all
                    ${menuOpened ? "button-main-menu-label -rotate-45" : ""}`}
                />    
            </button>
            <div 
                className={`main-menu-flyout z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overlfow-hidden flex flex-col
                ${menuOpened ? "w-80" : "w-0"}`}
            >
                <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
                    <MenuButton label="Welcome" onClick={() => doSectionChange(0)} />
                    <MenuButton label="About" onClick={() => doSectionChange(1)}/>
                    <MenuButton label="Rooms" onClick={() => doSectionChange(2)}/>
                    <MenuButton label="Location & Availability" onClick={() => doSectionChange(3)}/>
                    <MenuButton label="Amenities" onClick={() => doSectionChange(4)}/>
                </div>
            </div>
        </>
    );
}

const MenuButton = (props) => {
    const { label, onClick } = props;
    return (
        <button onClick={onClick} className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors">
            {label}
        </button>
    )
}