const { YoutubeTranscript } = require('../dist/youtube-transcript.common');
const fs = require('fs')
YoutubeTranscript.fetchTranscript(process.argv[2])
  .then(async (res)=>{
   await fs.writeFile('./talk.txt',res,(err)=>{
   })
  })
  .catch(console.error);
