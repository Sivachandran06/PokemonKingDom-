import React from 'react'
import './CardPage.css'

function CardPage({pokemon, onClose}) {
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

    return (
        <>
            <div className="blur-background"></div>
            <div className="expanded-content-container" style={{ backgroundImage: getTypeGradient(pokemon.type) }}>
                <span className='clear' onClick={onClose} >X</span>
                <div>
                    <img src={pokemon.image} alt='pokemon' />
                    <h2>{pokemon.name}</h2>
                </div>
                <div>
                    <p><strong>Weight:</strong> {pokemon.weight}</p>
                    <p><strong>Height:</strong> {pokemon.height}</p> 
                </div>
                <div className='stak'>
                    <p><strong>stat1:</strong> {pokemon.stats[0].stat.name}</p>
                    <p><strong>stat2:</strong> {pokemon.stats[1].stat.name}</p>
                    <p><strong>stat3:</strong> {pokemon.stats[2].stat.name}</p>
                    <p><strong>stat4:</strong> {pokemon.stats[3].stat.name}</p>
                    <p><strong>stat5:</strong> {pokemon.stats[4].stat.name}</p>
                    <p><strong>stat6:</strong> {pokemon.stats[5].stat.name}</p>
                </div>
                <div>
                    <p><strong>Bs1:</strong> {pokemon.stats[0].base_stat}</p>
                    <p><strong>Bs2:</strong> {pokemon.stats[1].base_stat}</p>
                    <p><strong>Bs3:</strong> {pokemon.stats[2].base_stat}</p>
                    <p><strong>Bs4:</strong> {pokemon.stats[3].base_stat}</p>
                    <p><strong>Bs5:</strong> {pokemon.stats[4].base_stat}</p>
                    <p><strong>Bs6:</strong> {pokemon.stats[5].base_stat}</p>
                </div>
            </div>
        </>
    )
}

export default CardPage