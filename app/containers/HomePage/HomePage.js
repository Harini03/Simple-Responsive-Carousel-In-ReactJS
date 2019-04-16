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

export class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.onKeyDownArrow = this.onKeyDownArrow.bind(this);
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

  onKeyDownArrow(e, slideIndex) {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13 || keyCode === 32) {
      this.goToSlide(e, slideIndex);
    }
  }

  onKeyUpArrow = (e) => {
    // e.preventDefault();
    const keyCode = e.keyCode || e.which;
    document.getElementById('prev').classList.remove('focused');
    document.getElementById('next').classList.remove('focused');
    if (keyCode === 9 || keyCode === 16 || keyCode === 13 || keyCode === 32) {
      document.getElementById(e.target.id).classList.add('focused');
    }
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

  goToSlide(e, slideIndex) {
    let n = slideIndex;
    const {
      slideCount,
      homePageState: {
        images
      },
      actions: {
        updateSlideIndex
      }
    } = this.props;
    if (slideIndex > Math.ceil(images.length / slideCount)) { n = 1; }
    if (slideIndex < 1) { n = Math.ceil(images.length / slideCount); }


    updateSlideIndex(n);
    e.preventDefault();
  }

  render() {
    const {
      homePageState: {
        isFetching,
        isError,
        images
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
          {!isFetching && images && images.length > 0
          && (
            <section className="centered">
              <div className="slideshow-container">
                {images.map((item, index) => {
                  const width = (100 / slideCount) - 2;
                  let startIndex = 0;
                  if (slideIndex > Math.floor(images.length / slideCount)) {
                    startIndex = (slideCount * (slideIndex - 1)) - (slideCount - (images % slideCount));
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
                <a href="javascript:void(0);" className="prev" id="prev" aria-label="previous" onKeyDown={(e) => this.onKeyDownArrow(e, slideIndex - 1)} onKeyUp={(e) => this.onKeyUpArrow(e)} onClick={(e) => { this.goToSlide(e, slideIndex - 1); }}>
                  <Icon
                    icon={ICONS.LEFT_ARROW}
                    className="left_arrow"
                    fill="#ffffff"
                  />
                </a>
                {/* eslint-disable no-script-url */}
                <a href="javascript:void(0);" className="next" id="next" aria-label="next" onKeyDown={(e) => this.onKeyDownArrow(e, slideIndex + 1)} onKeyUp={(e) => this.onKeyUpArrow(e)} onClick={(e) => { this.goToSlide(e, slideIndex + 1); }}>
                  <Icon
                    icon={ICONS.RIGHT_ARROW}
                    fill="#ffffff"
                  />
                </a>
                <div className="clear"></div>
              </div>
              <div className="button-section">
                <button type="button" className="prev-button" aria-label="Previous" disabled={(slideIndex === 1) ? 'disabled' : undefined} onClick={(e) => { this.goToSlide(e, slideIndex - 1); }}>Prev</button>
                <button type="button" className="next-button" disabled={(slideIndex === Math.ceil(images.length / slideCount)) ? 'disabled' : undefined} onClick={(e) => { this.goToSlide(e, slideIndex + 1); }}>Next</button>
              </div>
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
