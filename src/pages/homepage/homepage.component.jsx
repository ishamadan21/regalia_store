import React from 'react';

import Directory from '../../components/directory/directory.component';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './homepage.styles.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
let styles = {
  
 width:'100%'
 
   
  
  
};
const HomePage = () => (

  <div className='homepage'>
  <div style={styles}>
    <div className>
		<Carousel className='ca'>
			<div >
				<img src= "http://www.bergamoartefiera.com/wp-content/uploads/2015/10/Clothing-Shoes-online-01.jpg" alt="abcd"  />
        <p className="legend">" A WIDE VARIETY OF CLOTHES"</p>
			</div>
			<div>
				<img src="https://www.jprarts.com/cheap-shopping/wp-content/uploads/Clothes-1024x697.jpg" alt="abcd" />
        <p className="legend">abcd</p>
			</div>
      <div>
				<img src="https://greyareanews.com/wp-content/uploads/2016/04/Wakefield-DSCN3660-1024x697.jpg" alt="abcd"  />
        <p className="legend">abcd</p>
			</div>
      <div>
				<img src="https://pinstripemag.com/wp-content/uploads/2018/05/mens-summer-fashion-trends-2018.jpg" alt="abcd" />
        <p className="legend">abcd</p>
			</div>
      <div>
				<img src="https://nssdata.s3.amazonaws.com/images/galleries/21819/OneBlockDown-Kangol-RosarioRex-07b.jpg" alt="abcd" />
        <p className="legend">abcd</p>
			</div>
      <div>
				<img src="https://www.thecelebrationsociety.com/wp-content/uploads/2018/07/Stremel_MartinLeone_VitorLindoPhotoVideo_MackeyHouseWeddingPhotos065_big-e1530541923996-1024x697.jpg" alt="abc" />
        <p className="legend">abc</p>
			</div>
			<div>
				<img src="https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2018/04/19150705/clothing-line.jpg" alt="Japan"/>
				<p className="legend">Japan</p>
			</div>
      <div>
				<img src="https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2018/04/19150705/clothing-line.jpg"  alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
      <div>
				<img src="https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2018/04/19150705/clothing-line.jpg"  alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
      <div>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZYY0cWJrSCU-j1Uiq0wnYHyc2slPSkKh2YD94MwH9OoeJSuId&usqp=CAU" alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
      <div>
				<img src="https://www3.pictures.zimbio.com/mp/vcyUDbu8FSpl.jpg" alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
      <div>
				<img src="https://cdn.shopify.com/s/files/1/0750/4119/t/2/assets/slide_image_1.jpg?v=17934014030251490837" alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
      <div>
				<img src="https://static01.nyt.com/images/2017/12/24/fashion/00SNEAKERCON5/00SNEAKERCON5-jumbo.jpg" alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
       <div>
				<img src="https://static01.nyt.com/images/2017/12/24/fashion/00SNEAKERCON5/00SNEAKERCON5-jumbo.jpg" alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
      
		</Carousel>
    </div>
	</div>
  
    <Directory />
    

    <div className='foot'>
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  </div>
);

export default HomePage;
