import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Accordion, Button, Card, Carousel, Col, Row } from 'react-bootstrap'
import apiDeputados from '../services/apiDeputados'
import Pagina from '../components/pagina'
import Link from 'next/link'

const deputados = () => {

    const [deputados, setDeputados] = useState([])  

    useEffect(() => {

        apiDeputados.get('/deputados').then(resultado => {
            setDeputados(resultado.data.dados)
        })

    }, [])
 
    
  return (
  <>
   <Pagina titulo='Deputados'>

   <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-400px"
          src="data:image/png;base64,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"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="data:image/jpeg;base64,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"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEg8NEA8VEA8VFhUTEhUVFhUVFxEQFhYWGBUSGBUZHSkgGBonHRUXITEhJSkrLi4uGCEzOTMsNyg5LisBCgoKDQ0OFhAPFi0dFx0rKystKystLTcrKy0rLystKy0rKystLS0rLS0rMistLSsrKzcrKysrLS0tLS0tLSs3K//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcFBggDAgT/xABAEAABAwICBgcHAgMHBQAAAAABAAIDBBEFIQYHEjFBURMUImFxgZEjMkJScoKhc5JiscEVJDM0U7LRNUNjdKL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQMCBP/EAB0RAQEBAQACAwEAAAAAAAAAAAABEQIhQQMSMVH/2gAMAwEAAhEDEQA/AKOREWqCIiAiIgIiICIpQQilEBERAREQQilEEIpRBCIiAiIgIiICIiAiIgIiICIiAiKUEKURAREVBERAWV0awCfEZ2UkAG24FxLsmxsb7z3HgB/MgcViluOrHHaekqZWVTjHBUQvp3yC94trc/LO2Vu69+Cl/B+rENXI6GaehxGDEHQDaniiyexgvdze0drd3XtlnktEV86JavJMI65XNmFZIaeRkEbG7AkBAcNq5OZ2Rl+VQynNBERdAiIgKFKKCEUqEBERAREQEREBERARFKAiIqCIiAiIg+mMJvYE2FzYXsBxXyrYxXG6nBaHCW4Y1scdRE2aafow8z1DszGSQbeG+wsLWXjrO0WqJ20eKQ0L2yzQh1ayJhIjms03LBmL3Nzb4c81zOhVq9qKHpJI4xvc9rfUgf1XkWkXByIyPcVmtC6bpcQoI+dRF6B4J/AXV/B1YG7OQ4ZDyXO+uLRfqNX1iNtqapu9ttzJv+4zu37Q+ruXRC07W3TwPwuqM9uxsviPET32W28dojwJWUuVXNKL6ewjeLbjnyIuF8rZBERQEREBERBCKVCgIiICIiAiIgKURAREVBFnND9G34nUCmZIImhrpZZHC4ihZbafa4vvGVxv3hbSdCsMrGVDcJxCSeqgY6R0UrA0TsbvMZsLfneN17qWwV0iIuha+ovHak1Jw4yl1II5JWxkA7EgLc2m1x7xyvbNXgufdRP/AFJ3/ry/7o10Esuv1WFx7ROgrx/eaVj3fOLskH3tsfW4WF0a1Z0GH1ArIzLJI25i6RwLYiQQSA0DaNiRd1/XNboi50FS2muKv0hroMGonbVLG7allGbXEZPmuN7Whxa3mXd4WQ0601mr5f7Ewi8r33bNMw5EfExrtwYOL/Id/rHiGH6KQsp7dbr5S01GwQ12xzuQdlo+FpzO/JdSD41uaBsdTsraSOz6aNrJGje+mY0AP73MA8235Kj12M3tAZbxu8RuXKmmsMEddWx0wAgbK9rANwse0B3B1wO6y64vpGEREXYIiICIigKFKKCEREBERARFKAiIqCIiDZ9X2kUeH1LnzsMlNNE+nnA3iKS13AcbW3ciVZ+q/DsEiqZn0Fa+pqDGQGSNczo4iRtAbTG7ZyFzwHqqJX6cOrpaeWOoheY5Y3BzHDeCP6cCOIJUvI6WxXV7hVVfbomRuPxQ+xN+fYsD5haZi2pCE3NLWPZ/DM0PHhtNsR6FbnoBphHitOH5NqWACojGWy752j5Dnblu4LaFntiq81a6uXYVLJVzztllcwxMawHZa0kFziTmT2QN2We/hYa+J5mxtdI9wYwZuc4gNA7ycgq60o1t0sN4KBvXaknZaQHdEHnIZjtSZkZN38080b7imJQUsbqiolbFE3e5x/AG8nuGZVS4xpRX6Qyuw7C2Oho900xu0uZze74GngwZnjyHth+guJYxI2sxqZ0UW9kDbBwaeAbm2Ibt93HjzWd0k0wo9HTT4fBR3YWdIWxuDNkXLQ51wS5x2XZk3yVkGwaF6H02FRdHENuZ1ulmcBtSHkPlZyb/ADOax2kerOgr531khlZM8tLyx42XbIDR2XNPBo3LZsFxAVVPT1YYWCWNkoaTctDxcAnwIWs6wdPYsLZ0Mdpq549nHvEd90kluHJu8+GannR+fWpps3DoDTQu/vsrSGgb4IzkZTyPy9+fBc6uN89//K/bjUtQ+eZ1WXGpLj0u3723yI4W3W4DJfhW3POIhFKhUERFAREQERFBBRSoUBERAUqFKAiIqCIioIiKjJYBjU9BMyqpn7ErbjMXa5p3sc34mnl4HeFaNHpXpPXRNkpaWIRvB2ZY2stkbHOR5AIPAhU6rB1R6ZjD5zSzvDaOd2ZOQhmsAJSeDTYNPkeC56g2N2rnEay9TjWJhkTBtEB+1sAbzc2jj8RdZ7QWswKCqOH4cwyVGySajZ2w8AXc0Sk3GQ4ANzW94nQR1MUtNM3aikaWPFy27T3g3C1nRnV5R4bUurad8mcbo9h5DmsDi0lwdYH4bZ33rLVbetc0k0Lw6vcZ6qC8gaAZA97CGN3XINrDwX4dKNZOHUAc3pRUzi46OEh1nDg9/us/J7lpvUsa0jIM5OH4YSCGWI6RuZBDTZ0p3Zus3iEkGQ0g1gn2eEYFGaicNETZWgOaxrRs+z4OIAHbPZHesroHq6bRu69Wv6ziDjtbRJc2Jx4gnNz/AOI+XM7JovotSYZH0VNHYm3SSO7UkhHFzuXcLDuWaTf4OWNPqhsuI4g9uY6eQftOyfyFgFumt7CurYnUENsyYNnZ94s/z2w/1C0tb8/iCIiqIREUUREUBERQFClCoIREQApQIgIiKgiIqCIgVRKIio3nDNa+KU8LKdr4pAwBrXyR7Tw0bgXXG1YcSCclhsa01xGtu2ereWH4GkRs8C1lgfO619elNA+V7ImN2nvcGMaN7nuNmtHiSp9ZFb/qa0X65VGrlbenprOsRk+c36NvI2ttHwbzXQawmhmj7cNpIaNti4DalcPjmdm93hfIdwC/TpHjEdBTT1svuxtuB87ybMYPFxA81j1dqtN0s08FLitBQNeBC02qzf4pgWsaeWzdr/uHJWIQuQsRrZKiWWoldtSSOc955ucbnyXUWheMdeoaWrvdzmASfqs7L/y0nzV65zBo2vzB+kp6evaM4XGJ/wCnJ7pPg5tvvVGrrbSDC21tNUUb90rHMB+VxHZd5OsfJcnVVO6J74niz2Ocx45OabEeoXXx30leSIi0RBRSVCgIiKKIiKAhRCoIREQSEQIgIiKgiIqCBEVRKIioK09RmjPTTPxORvs4exDf4pyM3D6Wn1cOSrXDaKSplipom7UsjmsYObnG3ouqtG8GjoKaCij92Ntifnec3vPi4krju+ljJqj9eek3SzMwuN3s4bPmt8U5HZYfpafVx5K19MMebh1JPWOsXNFo2n45nZMb4XzPcCuV6qofK98sjtqR7nPe473PcbucfEkrn4+duleRV06gcYuyrw9xzaRURgn4HWZJbuBDP3KlltOrHGOp4lSyE2je7oJPol7N/J2yfJadzYOnVzxrrwXq2IGdotHUtEo/UHZkHqA77l0Oq913YN1ig6yBeSmeHjn0T7NkHh7h+1Y83KrntERbuQqEKKAiIooiIoCFEKghERAClQpQERFQREVBERUSiLMaJYBJiVVFRx5bRu91r9HEPfefLd3kDim4izNRei3v4vK35oqYH0klH5YPuVxLwoaOOCOOCJuxFG0MY3k0CwWE0+0jGGUU1SCOlI6OAc5nA7JtxDc3H6VhbtdKj12aT9aqm0Mbrw0xIdY5OqD7/wC0dnuO0q3X1LIXEucS5xJLicyScySea+V6OZkQUg+ShFUdW6G4yK+ipay/aewB/dKw7Eg/c0+oWRxCjZURS08gvHIx0bvpcCD/ADVT6gscu2pw15zHt4hfgbNkaPPYPmVcC81mV05CxShfTTTUz/fie+N31McWk/hfmVla9ME6CsjrGi0dQztfrR2a71aWH1Varbm7EQiIqCIigIiKAhRQoCIiApUIglERUEREBERUAuitUWiXUKXrErbVVQA51xnHDvZF3H4j3kDgq31P6IdeqetytvS05BIO6WbeyPwGTj5DiuhVn316BUDrVxSoxSsNPSwyT09NeNvRse8Ply6R/ZHMbI+nvV/L5iYGAMaA1o3AAAAeAXMuK5ipdX2Ly+7h8o+vZj/3kLYMN1NYlJYzPhpxxBf0jh5MuPyr/RdfemKow7UhTt/zFbJIeUbGxj1dtFbNh+rDCILHqnSnnK97/wD5uG/hbkAsfX43SU/+PVQxfXIxv4JXNtonD8Gpab/L0sMB5xxMYT4kC5X7lqVXrLweLI1rXn+Bkj/yG2Ww4RicNZDHVU7xJC8Xa7MbjYgg5gggghQa7rTwHr2Hzta280Xt4vFnvt82bQ8bLmYrsdcv6xtHv7Or54Gi0LvbQ/ovJs3yIc37V3xfSVrCIi0BERAREUBQpKhQEREBERBKKFKAiIqCyGA4TLWzxUkLbySO2RyaPieeQAuT4LHroLU7od1KDr0zLVU7QQCLGGA5hvcXZOP2jmpbg3PR3BYqCnho4R2GCxPF7z70h7yc/wAcFkJZGsDnucGtaCXEmwa0Zkk8BZfSqPXjpaWNbhELrOeA+pIO6P4IvO20e63NZzyrfNH9NMPry9tPUtL2kgtf7NzgPja12bm57/WynF9NMNpLiatiDhvYx3SP/ay5HmuV0Xf0ReGLa7aZtxS0kkpzAdKWxtPfZu0SPRadiet7FZriN8dM3/xxgm3Lak2vxZaAi6nMGUxLSOtqr9Yq5pQd4c92yftvb8LFoivgFa2orSXoppMMkd7Obtw33NmaDtNH1NHqwc1VK96CrfBJHPG7Zkjc17Dyc03H8lOpsHYCr/XNo31yj61G289Nd+W90B/xG+WTvtPNbfo7i7K6mgrI/dlYHEA32X7ns8Q4EeSyJAORFxxB4jksVccItq1kaLHDKx8TQerye0pzmfZney53lpy8LHitVW0uoIiICIoUBERAREQEREBSoRBKIv04ZRPqJYqaMXkle2Nn1OIAv3ZoN41Q6H9fqOtTNvSU5BIO6WbItj7wN58hxXQyxujuCxUFPDRwjsRixPF7zm557ybn8cFklnbqsbpHjMdBTTVsvuxtuBxe85MYO8kgLlTFcQkqppaqZ21LI4vee88ByA3AcgrE126V9ZnGHQvvDTk9KQcn1O4j7N3iXKsV3zPYIiLtBERAREQEREFvaiNJdl8mFSOyfeWnv84HtGDxaA77Xc1dK5Aw6tkp5YqiJxZLG4PYeTgb+i6p0Vx6PEaWGsjy2xZ7f9OUe+w+B9QQeKy6nlX4NYGircVpXQZNnZ24Hn4ZAPdJ+V24+R4LmSspZIXvhlYWSMJa9pyLXDeF2Aq+1n6vW4i11XTNDa5ozGQFS0CwY4/PYABx8DlYhzcHPKL7micxzmOaWuaS1zSLFrgbEEcDdfC0QUIigIiICIiAiIgIiICyejWKmiqqasDdropGvLfmaD2h42usYiDrrBcXgrYWVVNIJInceLTxa4fC4citf1laXtwumdsOBq5QWwN4jgZSOTfybDnbnPCsXqKRxfTzyQOORMbi3aHI23+a8a2skne6aaR0sjvec9xc4+ZXH1V5PeXEuJJJJJJzJJ3kniV8oi0QREQEREBERAREQFvGq7TQ4ZOWSkmjmIEu89G74ZgO7ceY8AtHRS+R2LG8OAc0hzSAQQbgg5gg8Qvpc56C6y6jDAKeRvWKTgwmz4rnPYdy/hOXgtwxfXdD0bhSUknTEWBm2Qxh52aSXW5ZLPKrStcrYxitT0dvdiMlv9Uxt2vPctIXvXVck8j55Xl8r3F73He5xNyV4LuIIiKgiIgIiICIiAiIgIiICIiCUUIglFCIJREQEREBEUIJRQiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIigIiICIioIiICIiAiIgIiICIiAiIg//9k="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

   


     <Accordion eventKey="0" className='mb-3 mt-3'>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Deputados</Accordion.Header>
      <Accordion.Body>

      <Row md={5} >
      {deputados.map(item => (
        
        <Col >
        <Card  className='mb-3 text-center' style={{ width: '200px' }}>
        <div >
      <Card.Img src={item.urlFoto} style={{width:'150px',}} />
      <Card.Body>
        <Card.Title><p>{item.nome}</p></Card.Title>
        <Card.Text>
        <p>{item.partido}</p>
        </Card.Text>
        
      </Card.Body>
        </div>
    </Card>
        
        
        </Col>
            
    ))}
    </Row>
           
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>

    

    <Accordion eventKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Partidos</Accordion.Header>
      <Accordion.Body>

      <Row md={5} >
      {deputados.map(item => (
        
        <Col >
        <Card  className='mb-3 text-center' style={{ width: '200px' }}>
        <div >
      <Card.Img  style={{width:'150px',}} />
      <Card.Body>
        <Card.Title><p>- {item.siglaPartido}</p></Card.Title>
        <Card.Text>
        <p></p>
        </Card.Text>
        <Link href={'/'+item.id}className='btn btn-danger'>Detalhes</Link>
      </Card.Body>
        </div>
    </Card>
        
        
        </Col>
            
    ))}
    </Row>
           
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>


   </Pagina>
  </>)
}

export default deputados



  

