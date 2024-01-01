import React, { useEffect } from 'react';
import Link from 'next/link'



export default function Aboutus() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "assets/js/theme-script.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <section className="page-title parallaxie" data-bg-img="assets/images/bg/06.jpeg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="white-bg p-md-5 p-3 d-inline-block">
                  <h1 className="text-theme">About <span className="text-black">Us</span></h1>
                  <nav aria-label="breadcrumb" className="page-breadcrumb border-top border-light pt-3 mt-3">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/"><i className="las la-home me-1"></i>Home</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>



        <div className="page-content">

          <section className='pb-0'>
            <div className="container">
              <div className="row align-items-start justify-content-between">
                <div className="col-lg-6 col-12">
                  <div className="me-5">
                    <img className="img-fluid w-100" src="assets/images/about/03.jpeg" alt="About Image" />
                  </div>
                  <div className="white-bg mt-n6 p-5 shadow-sm ms-5 z-index-1">
                    <div className="owl-carousel no-pb" data-dots="false" data-items="2" data-autoplay="true" data-autoplay-timeout="8000">
                      <div className="item">
                        <div className="counter d-flex">
                          <div className="counter-icon me-3">
                          <img src="assets/images/icons/12.svg" alt="Effective Meds Iamge Icon" />
                          </div>
                          <div className="counter-desc"> <span className="count-number text-black" data-to="500" data-speed="2000">500</span>
                            <h6>Effective Meds</h6>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="counter d-flex">
                          <div className="counter-icon me-3">
                            <img src="assets/images/icons/09.svg" alt="Delivery Guarantee Image Icon" />
                          </div>
                          <div className="counter-desc"> <span className="count-number text-black" data-to="40" data-speed="2000">40</span>
                            <h6>Delivery Guarantee</h6>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="counter d-flex">
                          <div className="counter-icon me-3">
                            <img src="assets/images/icons/10.svg" alt="Happy Clients Image Icon" />
                          </div>
                          <div className="counter-desc"> <span className="count-number text-black" data-to="6000" data-speed="2000">6000</span>
                            <h6>Happy Clients</h6>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="counter d-flex">
                          <div className="counter-icon me-3">
                            <img src="assets/images/icons/08.svg" alt="Excellence Image Icon" />
                          </div>
                          <div className="counter-desc"> <span className="count-number text-black" data-to="200" data-speed="2000">200</span>
                            <h6>Excellence</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 ">
                  <div className="section-title">
                    <h2 className="title">Learn more about Heart Berry.</h2>
                    <p className="mb-0">
                      “Heartberry Overseas Private Limited“, has gained regard among the prominent manufacturers, exporters, and suppliers of best quality Pharmaceutical Products within the few years of its established in 2023. We are offering a large assortment of Anticancer Drugs, Skin Care and Dermatology Products and Steroids and hormonal products. Our offered range is highly appreciated by our clients for their optimum quality, high effectiveness, and long shelf life. To meet the individual’s requirements, we are offering these products in various packaging options. Also, our offered products are highly recommended by the doctors for various diseases. We are exporting globally.
                    </p>
                    <h5 className='font-w-6 fs-4 mt-4'>How We Work Together</h5>
                    <div className='pt-3'>
                      <h6 className='font-w-5 mb-0'>01. Search your meds</h6>
                      <p className='mb-0'>Compare prices & brands.</p>
                    </div>
                    <div className='pt-3'>
                      <h6 className='font-w-5 mb-0'>02. Place your order</h6>
                      <p className='mb-0'>We'll get your prescriptions..</p>
                    </div>
                    <div className='pt-3'>
                      <h6 className='font-w-5 mb-0'>03. Make Payment & We Ship</h6>
                      <p className='mb-0'>Sastifaction Guaranteed Meds delivered on your Door.</p>
                    </div>
                  </div>
                  {/* <div className="d-flex align-items-start">
                    <ul className="list-unstyled list-icon mb-5 me-5">
                      <li className="mb-3"><i className="las la-check"></i> Home medicine review</li>
                      <li className="mb-3"><i className="las la-check"></i> Highest Quality Results</li>
                      <li><i className="las la-check"></i> We Ensure Safe Diagnosis</li>
                    </ul>
                    <ul className="list-unstyled list-icon mb-5">
                      <li className="mb-3"><i className="las la-check"></i> Home medicine review</li>
                      <li className="mb-3"><i className="las la-check"></i> Highest Quality Results</li>
                      <li><i className="las la-check"></i> We Ensure Safe Diagnosis</li>
                    </ul>
                  </div> */}
                  {/* <img className="img-fluid me-3" src="assets/images/sign.png" alt="" /> */}
                  <Link className="btn btn-theme" href="#"> <span>More About</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>


          <section className='pb-0'>
            <div className='container'>
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h2 className="title">About is Heartberry Overseas Private Limited</h2>
                    <p className="lead">Our doctors include highly qualified male and female practitioners who come from a range of backgrounds and bring a diversity of skills.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='position-relative service_processs'>
                      <div className='service_box'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className='service_detail_left text-center float-end rounded-1'>
                              <div className='text-center'>
                                <img src='assets/images/about/001.png' className='mx-auto' alt='Who we are Icon' />
                                <h5 className='mt-3 font-w-5 mb-0'>Who we are</h5>
                                <p className='pt-3 mt-1 text-center mb-0'>
                                  Heartberry Overseas Pvt. Ltd is proud to introduce itself as a one-stop source for all Pharmaceutical needs Based in Surat, Gujarat, India.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className=' text-center position-relative service_right'>
                              <img src='assets/images/about/06.png' className='img-fluid mx-auto d-block' alt='Who we are Image' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='service_box'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className=' text-center position-relative service_left'>
                              <img src='assets/images/about/07.png' className='img-fluid mx-auto d-block' alt='Who we are Icon' />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='service_detail_right text-center float-end rounded-1'>
                              <div className='text-center'>
                                <img src='assets/images/about/002.png' className='mx-auto' alt='Mission & Vision Image' />
                                <h5 className='mt-3 font-w-5 mb-0'>Mission & Vision</h5>
                                <p className='pt-3 mt-1 text-center mb-0'>
                                  Our vision is to become a world-leading specialty pharma company in India and to become a significant global player by providing high quality.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='service_box'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className='service_detail_left text-center float-end rounded-1'>
                              <div className='text-center'>
                                <img src='assets/images/about/003.png' className='mx-auto' alt='Our Values Icon' />
                                <h5 className='mt-3 font-w-5 mb-0'>Our Values</h5>
                                <p className='pt-3 mt-1 text-center mb-0'>
                                  Heartberry Overseasl Pvt. Ltd is committed to producing quality medicinal products, fulfilling Regulatory & Statutory requirements for customer satisfaction.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className=' text-center position-relative service_right'>
                              <img src='assets/images/about/08.png' className='img-fluid mx-auto d-block' alt=' Our Values Image' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='service_box'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className=' text-center position-relative service_left'>
                              <img src='assets/images/about/09.png' className='img-fluid mx-auto d-block' alt=' Our Service Image' />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='service_detail_right text-center float-end rounded-1'>
                              <div className='text-center'>
                                <img src='assets/images/about/004.png' className='mx-auto' alt='Our Service Icon' />
                                <h5 className='mt-3 font-w-5 mb-0'>Our Service</h5>
                                <p className='pt-3 mt-1 text-center mb-0'>
                                  High-quality public health is imperative for a working society and a country’s financial development,We at Heartberry Overseas Pvt. Ltd.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='pb-0'>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h2 className="title">Faq! Need Help ?</h2>
                    <p className="lead">Our doctors include highly qualified male and female practitioners who come from a range of backgrounds and bring a diversity of skills.</p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center ">
                <div className="col">
                  <div className="accordion " id="accordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          What Is The Need Of Prescription ?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse border-0 collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div className="accordion-body">We require a prescription because they are considered to be potentially harmful if not used under the supervision of a licensed health care practitioner. A prescription ensures that your treatment is monitored.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          How Long Will It Take For The Medicine/drugs To Reach My Home ?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                        <div className="accordion-body">Heartberryoverseas  has been known for its reliable and fast services for years. We can ship and easily deliver the shipment all over the world without any hassle. Domestic shipments will take 24 hours to 48 hours to reach and International shipments will take 8-9 days. It will be shipped by our trusted partners which are DHL, EMS and FEDEX.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          How To Make The Payment ?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse border-0 collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                        <div className="accordion-body">Our Customer Care Executive Can Help You In Making The Payments Or You Can Visit Our Page On How To Order And A Small Questionnaire There To Get Your Answers.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Can I Visit Your Office ?
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse border-0 collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
                        <div className="accordion-body">Yes, you can visit us anytime you feel. It is located in Delhi, India. The complete information is provided on the website. We are always happy to serve you.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          What Are The Contact Details?
                        </button>
                      </h2>
                      <div id="collapseFive" className="accordion-collapse border-0 collapse" aria-labelledby="headingFive" data-bs-parent="#accordion">
                        <div className="accordion-body">You can contact us at +91 9854499900 or drop your inquiry at <Link href="mailto:info@heartberryoverseas.com">info@heartberryoverseas.com</Link> We are headquartered at Surat.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                          Are There Any Hidden Charges?
                        </button>
                      </h2>
                      <div id="collapseSix" className="accordion-collapse border-0 collapse" aria-labelledby="headingSix" data-bs-parent="#accordion">
                        <div className="accordion-body">There are NO hidden charges. During your conversation with our representative, you will get to know about the complete procedure and payment.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                          Where Can I Get Cheap Medicines?
                        </button>
                      </h2>
                      <div id="collapseSeven" className="accordion-collapse border-0 collapse" aria-labelledby="headingSeven" data-bs-parent="#accordion">
                        <div className="accordion-body">Visit www.heartberryoverseas.com to buy good quality medicines at cheap prices. Get exclusive deals and delivery at your doorstep.</div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-box text-center mt-4">
                    <Link className="btn btn-dark" href="/faq"> <span>More Faq</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-0">
            <div className="container-fluid p-0">
              <div className="section-title text-center">
                <h2 className="title mb-0">Clients Review</h2>
              </div>
              <div className="row g-0">
                <div className="col-md-4" data-bg-img="assets/images/about/05.jpeg"></div>
                <div className="col-md-8 theme-bg py-5 px-lg-8 px-5">
                  <div className="owl-carousel no-pb client-profile" data-dots="false" data-items="1" data-autoplay="true" data-autoplay-timeout="8000">
                    <div className="item">
                      <div className="testimonial text-center ">
                        <div className="testimonial-img mb-2">
                          <img className="img-fluid rounded-circle shadow-sm d-inline-block" src="assets/images/clients/Clients-01.jpg" alt="Texas gal Profile" />
                        </div>
                        <div className="testimonial-content">
                          <div className="testimonial-caption mb-3">
                            <h5 className="text-white">Texas gal</h5>
                            <label className="fst-italic d-block text-light">Surat,GJ</label>
                          </div>
                          <p className="fst-italic text-light">Comes within 3 weeks. Ordered successfully several times. Good customer service when I have questions. I am pleased with their consistency and quality. So glad I found them.</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial text-center">
                        <div className="testimonial-img mb-2 ">
                          <img className="img-fluid rounded-circle shadow-sm d-inline-block" src="assets/images/clients/Clients-01.jpg" alt="Kurt Profile" />
                        </div>
                        <div className="testimonial-content">
                          <div className="testimonial-caption mb-3">
                            <h5 className="text-white">Kurt</h5>
                            <label className="fst-italic d-block text-light">Surat,GJ</label>
                          </div>
                          <p className="fst-italic text-light">Reliable, trustworthy company. The do what they promised. Expect delivery the right good in time. They do not necessarly deliver according to the pictures they showed which is strange for western customers.</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial text-center">
                        <div className="testimonial-img mb-2 ">
                          <img className="img-fluid rounded-circle shadow-sm d-inline-block" src="assets/images/clients/Clients-01.jpg" alt="Rose Navarre Profile" />
                        </div>
                        <div className="testimonial-content">
                          <div className="testimonial-caption mb-3">
                            <h5 className="text-white">Rose Navarre</h5>
                            <label className="fst-italic d-block text-light">Surat,GJ</label>
                          </div>
                          <p className="fst-italic text-light">I love ordering from Heartberry ! My items come, well, packaged and in a timely matter. Thank you so much for making this available to us. </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial text-center">
                        <div className="testimonial-img mb-2 ">
                          <img className="img-fluid rounded-circle shadow-sm d-inline-block" src="assets/images/clients/Clients-01.jpg" alt="bransonbergs Profile" />
                        </div>
                        <div className="testimonial-content">
                          <div className="testimonial-caption mb-3">
                            <h5 className="text-white">bransonbergs</h5>
                            <label className="fst-italic d-block text-light">Surat,GJ</label>
                          </div>
                          <p className="fst-italic text-light">You have make our critical products readily available with very good response and great quality. You make the process very easy for the customer!</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial text-center">
                        <div className="testimonial-img mb-2 ">
                          <img className="img-fluid rounded-circle shadow-sm d-inline-block" src="assets/images/clients/Clients-01.jpg" alt="gretchen Profile" />
                        </div>
                        <div className="testimonial-content">
                          <div className="testimonial-caption mb-3">
                            <h5 className="text-white">gretchen</h5>
                            <label className="fst-italic d-block text-light">Surat,GJ</label>
                          </div>
                          <p className="fst-italic text-light">Great service - I called to check on the order and they were helpful and prompt. The order took about 2 weeks to get (no fault of theirs-they shipped promptly).</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial text-center">
                        <div className="testimonial-img mb-2 ">
                          <img className="img-fluid rounded-circle shadow-sm d-inline-block" src="assets/images/clients/Clients-01.jpg" alt="Sheila Profile" />
                        </div>
                        <div className="testimonial-content">
                          <div className="testimonial-caption mb-3">
                            <h5 className="text-white">Sheila</h5>
                            <label className="fst-italic d-block text-light">Surat,GJ</label>
                          </div>
                          <p className="fst-italic text-light">Quick response to any inquiries I had and quick delivery of my order. They were very helpful and accommodating. I highly recommend.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

    </>
  )
}
