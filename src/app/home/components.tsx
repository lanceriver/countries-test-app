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
        <div className="flex items-center justify-center h-auto w-auto my-10">
            <div className="h-80 w-80 rounded-2xl bg-blue-200 shadow-2xl">
                <Country/>
                <Button
                    text={"Learn More!"}
                />
            </div>
        </div>
    );
}

function Button({ text }) {
    return (
        <h1 className="px-2 py-2 text-sm text-black font-semibold rounded-2xl border-2 px-2 mx-20 my-20 bg-slate-200">{text}</h1>
    );
}