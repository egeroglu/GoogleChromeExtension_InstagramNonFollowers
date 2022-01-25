const button = document.createElement('button');
button.innerText = "Search Unfollowers";
document.querySelector('header').appendChild(button);

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

var namesFollowers=[];
var namesMyFollowers=[];
var final=[];

async function folllowers(){
    document.querySelector('a.-nal3 ').click();
    height=1;
    lastHeight=0;
    while(height!=lastHeight){
        lastHeight=height;
        await sleep(2000);
        document.querySelector('div.isgrP').scrollTo(0,document.querySelector('div.isgrP').scrollHeight);
        height = document.querySelector('div.isgrP').scrollHeight;
        links = document.querySelectorAll('a.FPmhX.notranslate._0imsa ');

    }
}

async function myFollowers(){
    height=1;
    lastHeight=0;
    while(height!=lastHeight){
        lastHeight=height;
        await sleep(2000);
        document.querySelector('div.isgrP').scrollTo(0,document.querySelector('div.isgrP').scrollHeight);
        height = document.querySelector('div.isgrP').scrollHeight;
        linksMy = document.querySelectorAll('a.FPmhX.notranslate._0imsa ');
    }
}

button.addEventListener('click', async()=>{
    await folllowers();
    links.forEach(element => {
        namesFollowers.push(element.innerText);
    });
    document.querySelector("body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > div:nth-child(3) > button").click();
    await sleep(2000);
    document.querySelector("#react-root > section > main > div > header > section > ul > li:nth-child(3) > a").click();
    await sleep(2000);
    await myFollowers();
    linksMy.forEach(element=>{
        namesMyFollowers.push(element.innerText);
    });
    namesMyFollowers.forEach(element=>{
        if(namesFollowers.includes(element))return;
        final.push(element);
    });
    document.querySelector("body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > div:nth-child(3) > button").click();
    await sleep(1000);

    const container = document.createElement('div');
    container.class= "container";
    container.id="div";
    const h1 = document.createElement('h1');
    h1.innerText="Not Following";
    h1.id="title";
    container.appendChild(h1);
    const list = document.createElement('ul');
    list.id='ul';
    container.appendChild(list);

    document.querySelector('header').appendChild(container);

    await sleep(1000);

    final.forEach(element=>{
        const li = document.createElement('li');
        li.innerText='@'+element;
        li.id='li';
        list.appendChild(li);
    });

});