import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  // use openDB to await access to jate database version 1 
  const jateDb = await openDB('jate', 1);
  // create a read and write transaction
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  // using put method to pass data(id and value) into request
  const request = store.put({ value: content });
  const result = await request;
  console.log('📝 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all content from the database');
  // use openDB to await access to jate database version 1 
  const jateDb = await openDB('jate', 1);
  // created a read ONLY transaction 
  const tx = jateDb.transaction('jate', 'readonly');
  // open jate object store
  const store = tx.objectStore('jate');
  // use getAll method to store data into request
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result.value;
};

initdb();
