import redis from 'redis';

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

function createHash() {
 const hashKey = 'HolbertonSchools';
 const hashValues = {
    Portland: '50',
    Seattle: '80',
    'New York': '20',
    Bogota: '20',
    Cali: '40',
    Paris: '2'
 };

 Object.keys(hashValues).forEach((key) => {
    client.hset(hashKey, key, hashValues[key], redis.print);
 });
}

function displayHash() {
 const hashKey = 'HolbertonSchools';

 client.hgetall(hashKey, (err, object) => {
    if (err) {
      console.error(`Error retrieving hash: ${err}`);
    } else {
      console.log('Hash:', object);
    }
 });
}

createHash();
displayHash();
