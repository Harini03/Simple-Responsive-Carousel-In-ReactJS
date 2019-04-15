/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CarouselSlide from 'components/CarouselSlide';
import LoadingIndicator from 'components/LoadingIndicator';
import Icon from 'components/Icons/Icon';
import { ICONS } from 'components/Icons/Icon-assets';
import * as actions from './actions';

class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.updateDimensions();
  }

  componentDidMount() {
    const {
      actions: {
        fetchImages
      }
    } = this.props;
    // Data for carousel
    window.addEventListener('resize', this.updateDimensions);
    fetchImages();
  }

  goToSlide(e, slideIndex) {
    e.preventDefault();
    let n = slideIndex;
    const {
      slideCount,
      homePageState: {
        homePageResponse
      },
      actions: {
        updateSlideIndex
      }
    } = this.props;
    if (slideIndex >= Math.ceil(homePageResponse.length / slideCount)) { n = 1; }
    if (slideIndex < 1) { n = Math.ceil(homePageResponse.length / slideCount); }


    updateSlideIndex(n);
  }

  updateDimensions() {
    const {
      slideCount,
      actions: {
        updateSlideCount
      }
    } = this.props;
    const width = window.innerWidth;
    if (width >= 768 && slideCount !== 5) {
      updateSlideCount(5);
    } else if (width < 768 && slideCount !== 1) {
      updateSlideCount(1);
    }
  }

  render() {
    const {
      homePageState: {
        isFetching,
        isError,
        homePageResponse
      },
      slideIndex,
      slideCount
    } = this.props;
    return (
      <article>
        <div className="home-page">
          {isFetching
            && <LoadingIndicator />
          }
          {!isFetching && isError
            && <p>Something went wrong. Please try again later. </p>
          }
          {!isFetching && homePageResponse && homePageResponse.length > 0
          && (
            <section className="centered">
              <div className="slideshow-container">
                {homePageResponse.map((item, index) => {
                  const width = (100 / slideCount) - 2;
                  let startIndex = 0;
                  if (slideIndex > Math.floor(homePageResponse.length / slideCount)) {
                    startIndex = (slideCount * (slideIndex - 1)) - (slideCount - (homePageResponse % slideCount));
                  } else {
                    startIndex = slideCount * (slideIndex - 1);
                  }

                  if (index >= startIndex && index < slideIndex * slideCount) {
                    return (
                      <CarouselSlide key={item.id} homePage={item} slideWidth={width} showSlide />
                    );
                  }
                  return (
                    <CarouselSlide key={item.id} homePage={item} slideWidth={width} showSlide={false} />
                  );
                })}
                {/* eslint-disable no-script-url */}
                <a href="javascript:void(0);" className="prev" id="prev" onClick={(e) => { this.goToSlide(e, slideIndex - 1); }}>
                  <Icon
                    icon={ICONS.RIGHT_ARROW}
                    className="left_arrow"
                    fill="#ffffff"
                  />
                </a>
                {/* eslint-disable no-script-url */}
                <a href="javascript:void(0);" className="next" id="next" onClick={(e) => { this.goToSlide(e, slideIndex + 1); }}>
                  <Icon
                    icon={ICONS.RIGHT_ARROW}
                    fill="#ffffff"
                  />
                </a>
                <div className="clear"></div>
              </div>
              <button type="button" className="prev-button" onClick={(e) => { this.goToSlide(e, slideIndex - 1); }}>Prev</button>
              <button type="button" className="next-button" onClick={(e) => { this.goToSlide(e, slideIndex + 1); }}>Next</button>
            </section>
          )}
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object,
  homePageState: PropTypes.object,
  slideIndex: PropTypes.number,
  slideCount: PropTypes.number
};

const mapStateToProps = (state) => ({
  homePageState: state.homePage,
  slideIndex: state.homePage.slideIndex,
  slideCount: state.homePage.slideCount
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(
  HomePage
);
