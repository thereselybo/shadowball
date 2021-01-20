const detailsContainer = document.querySelector("#detailed-description");

function switchAccordionTabs(breakpoint) {
    const tabs = ` <div class="tabs row">
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-description-tab" data-toggle="tab" href="#nav-description" role="tab" aria-controls="nav-description" aria-selected="true"><h4>Description</h4></a>
                                <a class="nav-item nav-link" id="nav-reviews-tab" data-toggle="tab" href="#nav-reviews" role="tab" aria-controls="nav-reviews" aria-selected="false"><h4>Reviews</h4></a>
                                <a class="nav-item nav-link" id="nav-ballguide-tab" data-toggle="tab" href="#nav-ballguide" role="tab" aria-controls="nav-ballguide" aria-selected="false"><h4>Ball guide</h4></a>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
                                <p>The ShadowBall is a cutting-edge innovation in pass-and-receive technique training that’s revolutionizing the world of rugby skills. It has a flat fifth panel that allows it to rebound off any wall so a player can repeatedly pass and catch the ball on their own. It’s been described as the rugby equivalent of driving range practise in golf.</p>
                            </div>
                            <div class="tab-pane fade" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in elit ex. Quisque rutrum, nibh mattis iaculis ultricies, erat diam posuere augue, nec condimentum mi enim eu risus. Nam eget sem nisi. Integer et venenatis turpis, non finibus est. In porta dui ac neque egestas, vel consequat ipsum rutrum. Morbi ut tortor vitae justo tempus faucibus vel eu neque. Duis ornare odio quis sapien aliquet suscipit. Duis tristique lectus ut pretium porttitor. Praesent vitae felis est. Integer dapibus dolor et magna ultricies, in venenatis velit interdum. Aenean vulputate, massa non consequat laoreet, sapien mi consequat dui, at aliquet turpis elit quis nunc. Quisque pulvinar mi ut maximus accumsan. Aenean tempor, ante et consectetur sodales, mi velit vulputate ex, et imperdiet augue nulla vitae dolor. Mauris nec quam facilisis, porttitor quam a, scelerisque dolor. Pellentesque imperdiet vulputate felis efficitur rhoncus.</p>
                            </div>
                            <div class="tab-pane fade" id="nav-ballguide" role="tabpanel" aria-labelledby="nav-ballguide-tab">
                                <p>Praesent sem nulla, lobortis vel porta ac, bibendum vitae lorem. Maecenas gravida sapien nisl, nec pharetra mi elementum vitae. Praesent luctus fermentum ultrices. Etiam interdum malesuada porta. Etiam ullamcorper ante tellus, eu tincidunt lacus euismod vel. Sed ut porta tellus, sit amet hendrerit ex. Aenean vitae libero tempus, hendrerit purus nec, efficitur sem. Etiam id est sit amet velit malesuada faucibus vitae ac lorem. Integer scelerisque eget justo non faucibus. Donec auctor nibh mi, ultricies viverra velit volutpat in. Cras semper, mi non aliquet scelerisque, augue mauris porttitor dolor, et imperdiet lacus sapien in risus. Etiam et mollis nibh. Aenean ut ligula fermentum, laoreet sem a, viverra sem.
                                </p>
                            </div>
                        </div>
                    </div>`;
                    
    const accordion = `<div class="accordion" id="detailed-accordion">
                    <div class="card">
                    <div class="accordion-header" id="headingDescription"  type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="true" aria-controls="collapseDetails">
                      <h4 class="mb-0">
                          Description
                      </h4>
                      <i class="fas fa-angle-down"></i>
                    </div>
                
                    <div id="collapseDetails" class="collapse show" aria-labelledby="headingDescription" data-parent="#detailed-accordion">
                      <div class="card-body">
                          <p>The ShadowBall is a cutting-edge innovation in pass-and-receive technique training that’s revolutionizing the world of rugby skills. It has a flat fifth panel that allows it to rebound off any wall so a player can repeatedly pass and catch the ball on their own. It’s been described as the rugby equivalent of driving range practise in golf.</p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="accordion-header" id="headingReviews"  type="button" data-toggle="collapse" data-target="#collapseReviews" aria-expanded="false" aria-controls="collapseReviews">
                        <h4 class="mb-0 collapsed">
                            Reviews
                        </h4>
                        <i class="fas fa-angle-down"></i>
                    </div>
                    <div id="collapseReviews" class="collapse" aria-labelledby="headingReviews" data-parent="#detailed-accordion">
                      <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in elit ex. Quisque rutrum, nibh mattis iaculis ultricies, erat diam posuere augue, nec condimentum mi enim eu risus. Nam eget sem nisi. Integer et venenatis turpis, non finibus est. In porta dui ac neque egestas, vel consequat ipsum rutrum. Morbi ut tortor vitae justo tempus faucibus vel eu neque. Duis ornare odio quis sapien aliquet suscipit. Duis tristique lectus ut pretium porttitor. Praesent vitae felis est. Integer dapibus dolor et magna ultricies, in venenatis velit interdum. Aenean vulputate, massa non consequat laoreet, sapien mi consequat dui, at aliquet turpis elit quis nunc. Quisque pulvinar mi ut maximus accumsan. Aenean tempor, ante et consectetur sodales, mi velit vulputate ex, et imperdiet augue nulla vitae dolor. Mauris nec quam facilisis, porttitor quam a, scelerisque dolor. Pellentesque imperdiet vulputate felis efficitur rhoncus.</p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="accordion-header" id="headingBallguide"  type="button" data-toggle="collapse" data-target="#collapseBallguide" aria-expanded="false" aria-controls="collapseBallguide">
                        <h4 class="mb-0 collapsed">
                            Ball guide
                        </h4>
                        <i class="fas fa-angle-down"></i>
                    </div>
                    <div id="collapseBallguide" class="collapse" aria-labelledby="headingBallguide" data-parent="#detailed-accordion">
                      <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in elit ex. Quisque rutrum, nibh mattis iaculis ultricies, erat diam posuere augue, nec condimentum mi enim eu risus. Nam eget sem nisi. Integer et venenatis turpis, non finibus est. In porta dui ac neque egestas, vel consequat ipsum rutrum. Morbi ut tortor vitae justo tempus faucibus vel eu neque. Duis ornare odio quis sapien aliquet suscipit. Duis tristique lectus ut pretium porttitor. Praesent vitae felis est. Integer dapibus dolor et magna ultricies, in venenatis velit interdum. Aenean vulputate, massa non consequat laoreet, sapien mi consequat dui, at aliquet turpis elit quis nunc. Quisque pulvinar mi ut maximus accumsan. Aenean tempor, ante et consectetur sodales, mi velit vulputate ex, et imperdiet augue nulla vitae dolor. Mauris nec quam facilisis, porttitor quam a, scelerisque dolor. Pellentesque imperdiet vulputate felis efficitur rhoncus.</p>
                      </div>
                    </div>
                  </div>
              </div>`;

    if(breakpoint.matches) {
        detailsContainer.innerHTML = tabs;
    } else {
        detailsContainer.innerHTML = accordion;
    }
}

switchAccordionTabs(breakpoint);
breakpoint.addListener(switchAccordionTabs);