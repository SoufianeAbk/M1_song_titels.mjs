import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let artiest = await userInput.question('Geef een artiest in :');

switch(artiest){
    case 'Ninho':
        console.log('Je koos voor Destin\n'
            ,'Hij is de artiest achter de hit MILS2.0'
        );
        break;

        case 'Tupac':
            console.log('Je koos voor Ghost\n'
                ,'Hij is de artiest achter de hit Hit em up dirty'
            );
            break;

            case 'Reezy':
                console.log('Je koos voor Expensive sh*t\n'
                    ,'hij is de artiest achter de hit Penny'
                );
                break;

                case 'Joey AK':
                    console.log('Je koos voor Ready To Die\n'
                        ,'Hij is de artiest achter de hit RAW'
                    );
                    break;

                    default:
                        console.log('Artiest is niet gekend');
}
process.exit()