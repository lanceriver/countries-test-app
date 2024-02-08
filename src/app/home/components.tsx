"use client"
import { useState, useEffect } from 'react';

const nav_buttons = ["Home", "About", "All Countries", "Browse", "Profile"];

const country_api = "https://restcountries.com/v3.1/all?fields="

const userCountryApi = "https://api.country.is"

const countries = [];

export function SearchBar() {
    return (
        <section>
            <CountrySearch />
        </section>
    );
}

export function Form({ id, placeholder, onKeyDown }) {
    return (
        <div className="mx-5 border-2 px-2 py-3 rounded-full justify-center">
            <input type="text" id={id} placeholder={placeholder} onKeyDown={onKeyDown}/>
        </div>
    );
}

function CountrySearch() {
    const [input, setInput] = useState();
    const [submit, setSubmit] = useState(false);
    const originalState = [];
    const [countries, setCountries] = useState(originalState);
    function handleSubmit(e) {
        if (e.key == "Enter") {
            e.preventDefault();
            setInput(e.target.value);
            setCountries([
                ...countries, e.target.value
            ])
            setSubmit(true);        
        }
    }
    if (submit == true) {
        return (
            <section>
                <Form id={"countrySearch"}
                    placeholder={"Type a country..."}
                    onKeyDown={handleSubmit}
                />
                <ul>
                    {countries.map(country => (<CountryCard input={country}/>))}
                </ul>
            </section>
        )
    }
    return (
        <section>
            <Form id={"countrySearch"}
                placeholder={"Type a country..."}
                onKeyDown={handleSubmit}
        />
        </section>
        
    );
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

export function CountryCard( { input } ) {
    return (
        <div className="flex justify-center h-auto w-auto my-10">
            <div className="h-80 w-80 rounded-2xl bg-blue-200 shadow-2xl">
                <Country 
                    countryName={input}
                />
                <CountryLocation/>
            </div>
        </div>
    );
}

function Country( { countryName } ) {
    return (
        <div className="mx-2 my-2 h-40 w-76 rounded-2xl bg-slate-300 shadow-xl">
         <h1 className="px-5 py-3 text-md text-white font-bold">{countryName}</h1>
        </div>
    );
}

function CountryLocation() {
    return (
        <div className="h-20 w-36 rounded-2xl bg-slate-300 shadow-xl mt-4 ml-40"></div>
    );
}

function Button({ style, text, onClick }) {
    return (
        <button className={style} onClick={onClick}>{text}</button>
    );
}

export function MyCountryButton() {
    const [click, setClick] = useState(false);
    const [country, setCountry] = useState(null);
    const [err, setErr] = useState(null);
    async function handleClick() {
        try {
            const response = await fetch(userCountryApi, {
                method:"GET",
                headers: {
                    "Accept": "application/json",
                }
            });
            const responseText = await response.json();
            const userCountry = responseText["country"];
            console.log(userCountry);
            setCountry(userCountry)
            return (
                    <section>
                        <h1>{country}</h1>
                    </section>
            );
        }
        catch (err) {
            setErr("Can't find your country doofus");
            console.log(err);
        }
    }
    return (
        <section>
             <Button 
                style={"px-3 py-2 text-center text-xs text-black font-bold rounded-2xl border-2 border-black px-2 ml-40 mr-4 mt-4 bg-slate-200" }
                text={"What's my country?"}
                onClick={handleClick}
            />
            {country && (
                <section>
                    <h1 className="text-md text-black font-bold">Your country is: </h1>
                    <CountryCard 
                        input={country}
                    />
                </section>
            )}
            {err && <p>{err}</p>}
        </section>
    );
}

