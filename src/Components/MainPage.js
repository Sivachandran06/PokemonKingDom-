import React,{ useState, useEffect } from 'react'
import './MainPage.css'
import CardPage from './CardPage';

function MainPage() {
    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [show, setShow] = useState(false);
    const [searchText, setSearchText] = useState('')

    async function fetchData() {
        try {
            // Fetching data from the first API
            let response1 = await fetch('https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1');
            let data1 = await response1.json();
            let { results: results1 = [] } = data1[0];
            console.log("result1", results1)
            let pokeList1 = [];
            for (let i = 0; i < results1.length; i++) {
                let { url: urlLink } = results1[i];
                let res = await fetch(urlLink);
                let urlFetch = await res.json();
                urlFetch = urlFetch[0];
                pokeList1.push(urlFetch);
            }

            // Fetching data from the second API
            let response2 = await fetch('https://content.newtonschool.co/v1/pr/64ccef632071a9ad01d36fea/pokemonspages2');
            let data2 = await response2.json();
            let { results: results2 = [] } = data2[0];
            console.log("result2", results2)
            let pokeList2 = [];
            for (let i = 0; i < results2.length; i++) {
                let { url: urlLink } = results2[i];
                let res = await fetch(urlLink);
                let urlFetch = await res.json();
                urlFetch = urlFetch[0];
                pokeList2.push(urlFetch);
            }

            // Concatenating the two arrays and updating the state
            setPokemon([...pokeList1, ...pokeList2]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    async function fetchData1() {
        try {
            let response1 = await fetch('https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1');
            let data1 = await response1.json();
            let { results: results1 = [] } = data1[0];
            console.log("result1", results1)
            let pokeList1 = [];
            for (let i = 0; i < results1.length; i++) {
                let { url: urlLink } = results1[i];
                let res = await fetch(urlLink);
                let urlFetch = await res.json();
                urlFetch = urlFetch[0];
                pokeList1.push(urlFetch);
            }

            // Fetching data from the second API
            let response2 = await fetch('https://content.newtonschool.co/v1/pr/64ccef632071a9ad01d36fea/pokemonspages2');
            let data2 = await response2.json();
            let { results: results2 = [] } = data2[0];
            console.log("result2", results2)
            let pokeList2 = [];
            for (let i = 0; i < results2.length; i++) {
                let { url: urlLink } = results2[i];
                let res = await fetch(urlLink);
                let urlFetch = await res.json();
                urlFetch = urlFetch[0];
                pokeList2.push(urlFetch);
            }
            // Fetching data from the 3 API
            let response3 = await fetch('https://content.newtonschool.co/v1/pr/64ccef112071a9ad01d36fdc/pokemonspages3');
            let data3 = await response3.json();
            let { results: results3 = [] } = data3[0];
            console.log("results3 ", results3)
            let pokeList3 = [];
            for (let i = 0; i < results3.length; i++) {
                let { url: urlLink } = results3[i];
                let res = await fetch(urlLink);
                let urlFetch = await res.json();
                urlFetch = urlFetch[0];
                pokeList3.push(urlFetch);
            }

            // Fetching data from the 4 API
            let response4 = await fetch('https://content.newtonschool.co/v1/pr/64cceecf2071a9ad01d36fca/pokemonspages4');
            let data4 = await response4.json();
            let { results: results4 = [] } = data4[0];
            console.log("results4 ", results4)
            let pokeList4 = [];
            for (let i = 0; i < results4.length; i++) {
                let { url: urlLink } = results4[i];
                let res = await fetch(urlLink);
                let urlFetch = await res.json();
                urlFetch = urlFetch[0];
                pokeList4.push(urlFetch);
            }

            // Concatenating the two arrays and updating the state
            setPokemon([...pokeList1, ...pokeList2, ...pokeList3, ...pokeList4]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const moreData = () => {
        fetchData1()
    };

    const getTypeGradient = (type) => {
        switch (type) {
            case 'rock':
                return 'linear-gradient(to top, #c79081 0%, #dfa579 100%)';
            case 'ghost':
                return 'linear-gradient(to top, #b7b7b8 0%, #e2ebf0 100%)';
            case 'electric':
                return 'linear-gradient(to right, #f83600 0%, #f9d423 100%)';
            case 'bug':
                return 'linear-gradient(to top, #e6b980 0%, #eacda3 100%)';
            case 'poison':
                return 'linear-gradient(to top, #df89b5 0%, #bfd9fe 100%)';
            case 'normal':
                return 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)';
            case 'fairy':
                return 'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)';
            case 'fire':
                return 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
            case 'grass':
                return 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)';
            case 'water':
                return 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)';
            case 'ground':
                return 'linear-gradient(315deg, #772f1a 0%, #f2a65a 74%)';
            default:
                return 'linear-gradient(to top, #ffffff 0%, #ffffff 100%)'; // Default gradient
        }
    };

    const openExpandedContent = (poke) => {
        setSelectedPokemon(poke);
        setShow(true)
    };

    const handleCloseCityCard = () => {
        setSelectedPokemon(null);
        setShow(false);
    };

    const onChangeHandler = (event) =>{
        const searchText = event.target.value.toLowerCase()
        setSearchText(searchText)
    }

    const filterSearch = pokemon.filter((pok) => {
        return pok.name.toLowerCase().includes(searchText)
    })


    return (
        <div className='main'>
            <h1 style={{color:'white', fontSize:50}}>Pokemon Kingdom</h1>
            <input className='inp' type='search' placeholder='Enter Pokemon Name' onChange={onChangeHandler}/>
            <br/>
            <br/>
            <div className="pokemon-cards">
                {filterSearch.map((el) => (
                    <div key={el.id} className="card" style={{ backgroundImage: getTypeGradient(el.type) }}>
                        <p>#{el.id}</p>
                        <img src={el.image} alt='pokemon' />
                        <h2>{el.name}</h2>
                        <p>Type: {el.type}</p>
                        <button className="more-button" onClick={() => openExpandedContent(el)}>Read More</button>
                    </div>
                ))}
            </div>
            <div className='btn'>
                <button onClick={moreData} style={{cursor:'pointer', marginTop:20}}><b>More Pokemon</b></button>
            </div>
            {selectedPokemon && <CardPage pokemon={selectedPokemon} onClose={handleCloseCityCard} />}
        </div>
    )
}

export default MainPage