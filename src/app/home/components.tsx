const nav_buttons = ["Home", "About", "All Countries", "Browse", "Profile"];

const countries = ["Philippines", "Singapore", "Australia", "Mexico"];

export function SearchBar() {
    return <form className="flex mx-5 border-2 px-2 py-3 rounded-full justify-center">Type a country...</form>
}

export function NavBar() {
    const NavButtons = nav_buttons.map(nav_button => 
        <NavButton key = {nav_button} label={nav_button}/>
        );
    return (
        <div className="flex flex-wrap">{NavButtons}</div>
    )
}

function NavButton({ label }) {
    return (
        <h1 className="px-1 text-sm">{label}</h1>
    );
}

function Country() {
    const number = Math.floor(Math.random() * 4);
    const country = countries[number];
    return (
        <h1 className="px-5 py-3 text-md text-white font-bold">{country}</h1>
    );
}

export function CountryCard() {
    return (
        <div className="flex justify-center h-auto w-auto my-10">
            <div className="h-80 w-80 rounded-2xl bg-blue-200 shadow-2xl">
                <CountryPhoto/>
                <CountryLocation/>
                <Button
                    text={"Learn More!"}
                />
            </div>
        </div>
    );
}

function CountryPhoto() {
    return (
        <div className="mx-2 my-2 h-40 w-76 rounded-2xl bg-slate-300 shadow-xl">
             <Country/>
        </div>
    );
}

function CountryLocation() {
    return (
        <div className="h-20 w-36 rounded-2xl bg-slate-300 shadow-xl mt-4 ml-40"></div>
    );
}

function Button({ text }) {
    return (
        <h1 className="px-3 py-2 text-center text-xs text-black font-bold rounded-2xl border-2 border-black px-2 ml-40 mr-4 mt-4 bg-slate-200">{text}</h1>
    );
}