import Lorenzati from "../../assets/images/Experience/Lorenzati.svg"
import Cubits from "../../assets/images/Experience/Cubits.svg"

let year = new Date();
const string = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(year);;

function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const  WorkExperience = [
    {
        "id": 1,
        "image": Cubits,
        "title": "Desarrollador Full-Stack",
        "enterprise": "Cubits S.R.L.",
        "date": {
            "start": {
                "year": 2019,
                "month": "Mayo"
            },
            "end": {
                "year": year.getFullYear(),
                "month": capitalizarPrimeraLetra(string)
            }
        },
        "summary": "Mantenimiento y migración de sistema modernizandolo a las ultimas tecnologías"
    },
    {
        "id": 2,
        "image": Lorenzati,
        "title": "Desarrollador Full-Stack",
        "enterprise": "Lorenzati, Ruetsch Y Cia S.A.",
        "date": {
            "start": {
                "year": 2010,
                "month": "Octubre"
            },
            "end": {
                "year": 2019,
                "month": "Abril"
            }
        },
        "summary": "Mantenimiento y migración de sistema modernizandolo a las ultimas tecnologías"
    }
]

export default WorkExperience