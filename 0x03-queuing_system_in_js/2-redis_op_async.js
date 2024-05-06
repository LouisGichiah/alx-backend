import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient({
 host: '127.0.0.1',
 port: 6379
});

client.on('connect', () => {
 console.log('Redis client connected to the server');
});

client.on('error', (error) => {
 console.log(`Redis client not connected to the server: ${error.message}`);
});

function setNewSchool(schoolName, value) {
 client.set(schoolName, value, redis.print);
}

const getAsync = promisify(client.get).bind(client);

async function displaySchoolValue(schoolName) {
 try {
    const value = await getAsync(schoolName);
    console.log(`Value for ${schoolName}: ${value}`);
 } catch (err) {
    console.error(`Error retrieving ${schoolName}: ${err}`);
 }
}

async function main() {
 await displaySchoolValue('Holberton');
 setNewSchool('HolbertonSanFrancisco', '100');
 await displaySchoolValue('HolbertonSanFrancisco');
}

main();
