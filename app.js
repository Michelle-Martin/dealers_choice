console.log('hi')

const pg = require('pg')
const client = new pg.Client('postgres://localhost/movie_db');

const syncAndSeed = async()=> {
const SQL = `
DROP TABLE IF EXISTS movie;
CREATE TABLE movie(
    id INTEGER PRIMARY KEY, 
    name VARCHAR(100) NOT NULL,
    rt VARCHAR(100) NOT NULL,
    details VARCHAR(1000) NOT NULL
    );
    INSERT INTO movie(id, name, rt, details) VALUES(1, 'Catch Me If You Can','98%', 'With help from a strong performance by Leonardo DiCaprio as real-life wunderkind con artist Frank Abagnale, Steven Spielberg crafts a film thats stylish, breezily entertaining, and surprisingly sweet.');
    INSERT INTO movie(id, name, rt, details) VALUES(2, 'Fyre', '92%', 'Fyre smolders with agonizing tension when a party in paradise goes awry, but this slickly assembled documentary reserves its greatest horror for damning observations about the dangers of wealth.');
    INSERT INTO movie(id, name, rt, details) VALUES(3, 'The Social Network', '96%', 'Impeccably scripted, beautifully directed, and filled with fine performances, The Social Network is a riveting, ambitious example of modern filmmaking at its finest.');
    INSERT INTO movie(id, name, rt, details) VALUES(4, 'Moonlight', '98%', 'Moonlight uses one mans story to offer a remarkable and brilliantly crafted look at lives too rarely seen in cinema.');
    INSERT INTO movie(id, name, rt, details) VALUES(5, 'Homecoming: A Film by Beyonce', '98%', 'Beychella forever.');
    INSERT INTO movie(id, name, rt, details) VALUES(6, 'The Irishman', '95%', 'An epic gangster drama that earns its extended runtime, The Irishman finds Martin Scorsese revisiting familiar themes to poignant, funny, and profound effect.');
    INSERT INTO movie(id, name, rt, details) VALUES(7, 'Marriage Story', '94%', ' Observing a splintering union with compassion and expansive grace, the powerfully acted Marriage Story ranks among writer-director Noah Baumbachs best works.');
    INSERT INTO movie(id, name, rt, details) VALUES(8, 'Pick of the Litter', '98%', ' Pick of the Litter has all the fluffy adorableness audiences expect from a puppy documentary, along with a story that's as edifying as it is heartwarming.');

`;
await client.query(SQL);
}

const setUp = async()=> {
    try {
        await client.connect()
        await syncAndSeed();
        console.log('connected!!!')

    }
    catch(ex){
        console.log(ex)
    }
}

setUp();