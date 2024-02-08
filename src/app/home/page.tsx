import { SearchBar, NavBar, MyCountryButton} from './components.tsx';

export default function Page() {
    return (
    <section>
       <NavBar />
        <h1 className="flex p-10 text-lg font-bold justify-center">Country in a Box</h1>
        <h1 className="flex justify-center p-5 text-md font-bold">A place to know more about the world, from the comfort of your home.</h1>
        <h1 className="flex p-10 text-md font-bold justify-center">Want to learn more about Mexico?</h1>
        <SearchBar />
        <MyCountryButton />
    </section>
        
    );
}

