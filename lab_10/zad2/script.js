import fs from 'fs';

const path = process.argv[2];

if(fs.existsSync(path)){
  if(fs.lstatSync(path).isDirectory()){
    console.log(`'${path}' jest katalogiem`);
  } else{
    console.log(`'${path}' jest plikiem, a jego zawartość to:`);
    console.log(fs.readFileSync(path,'utf-8'));
  }
}else{
  console.log(`'${path}' nie istnieje`);
}
