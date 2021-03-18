             

const proyects = [
    {
        src: './resources/Domino.png',
        link: 'https://skullflowerss.github.io/Domino-project/',
        name: 'Domino'
    },
    {
        src: './resources/Tile.png',
        link: 'https://skullflowerss.github.io/tilesproject/',
        name:'tile'
    },
    {
        src: './resources/Anime.png',
        link: 'https://skullflowerss.github.io/animesearcher/',
        name: 'animesearcher'
    },
    {
        src: './resources/3dflower.png',
        link: 'https://skullflowerss.github.io/3dflower/',
        name: '3dflower'
    },
    {
        src: './resources/wrong.png',
        link: 'https://skullflowerss.github.io/wronggenerator/',
        name: 'wronggenerator'
    },
    {
        src: './resources/Wordmoving.png',
        link: 'https://skullflowerss.github.io/wordmoving/',
        name: 'word moving'
    },
    {
        src: './resources/colorgenerator.png',
        link: 'https://skullflowerss.github.io/color-generator/',
        name: 'color generator'
    },
    {
        src: './resources/parasol.png',
        link: 'https://skullflowerss.github.io/parasol-threejs-1/',
        name: 'parasol'
    }
]

const openprocessing = [
    {
        src: 'https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail1111944@2x.jpg?hash=20210223224026',
        link: 'https://openprocessing.org/sketch/1111944',
        name: 'maskedCircles'
    },
    {
        src: 'https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail953924@2x.jpg?hash=20200902112902',
        link: 'https://openprocessing.org/sketch/953924',
        name: 'wordtile'
    },
    {
        src: 'https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail896798@2x.jpg?hash=20200514190933',
        link: 'https://openprocessing.org/sketch/896798',
        name: 'oldgraphics look a like'
    },
    {
        src: 'https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail891293@2x.jpg?hash=20200508104350',
        link: 'https://openprocessing.org/sketch/891293',
        name: 'digitalStains'
    },
    {
        src: 'https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail949973@2x.jpg?hash=20200825165836',
        link: 'https://openprocessing.org/sketch/949973',
        name: 'cubespiral'
    },
    {
        src: 'https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail895747@2x.jpg?hash=20200513203308',
        link: 'https://openprocessing.org/sketch/895747',
        name: 'dottedFractals'
    },
    
    
]

const behance = [
    {
        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/0cbd0b80951201.5ceff2f078317.jpg',
        link: 'https://www.behance.net/gallery/80951201/spirals-of-recursion',
        name: 'spirals of recursion'
    },
    {
        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/86bb2785835089.5d88343348c36.jpg',
        link: 'https://www.behance.net/gallery/85835089/Databuildings',
        name: 'databuildings'
    },  
    {
        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e7422b81280103.5cfa7fd2ca741.jpg',
        link: 'https://www.behance.net/gallery/81280103/broken',
        name: 'broken'
    },  
    {
        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/08de2494063005.5e74f4ebcb188.jpg',
        link: 'https://www.behance.net/gallery/94063005/newSinMov',
        name: 'newSinMov'
    },   
    {
        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/6a7a9e82765553.5d2751065ad06.jpg',
        link: 'https://www.behance.net/gallery/82765553/Portafolio-Domestika-2019',
        name: 'portfolio domestika'
    }, 
    {
        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a4861f94384855.5e7d5340a6eb3.jpg',
        link: 'https://www.behance.net/gallery/94384855/kanjigrid',
        name: 'kanjigrid'
    },    
    
]

const arr = [
    proyects,
    openprocessing,
    behance,
]


function imageCreator(){

    const sector = arr.map((x,i) => {
          let html = x.map(obj =>{
              return`
                         <div class="pf-card">
                              <div class="pf-card-container">
                                  <div class="pf-card-img">
                                      <img id="work scl" src="${obj.src}" alt="">
                                  </div>
                                  <div class="pf-card-info">
                                      <p><a href="${obj.link}" target="_blank">${obj.name}</a></p>
                                  </div>
                              </div>
                          </div> 
                      `
                  }).join("")
                    const portfolio = document.createElement('div')
                    portfolio.setAttribute('class', 'portfolio')
                    portfolio.setAttribute('id', `${i}`)
                    portfolio.innerHTML = html
                    const area = document.getElementsByClassName('portfolio-area')[i]
                    area.appendChild(portfolio)
          })
        
}
imageCreator()

