


 const postData = async (url, data) => {
     console.log('post');
    const res = await fetch(url, {
     method: 'POST',
     body: data,
     headers: {
       'Content-type' : 'application/json'
     }
    });
    return await res.json();
    };

    const getResource = async (url) => {
        const res = await fetch(url);
    
        if(!res.ok){
          throw new Error(`Couldn't fetch url ${url}, status: ${res.status}`);
        }
    
       return await res.json();
     };

    export {postData, getResource};