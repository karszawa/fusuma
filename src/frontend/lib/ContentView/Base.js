/* eslint-disable  react/prop-types */

import React from 'react';
import Prism from 'prismjs';

class Base extends React.PureComponent {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const { slides, currentIndex, className = undefined, lazyload = true } = this.props;

    return (
      <article className={className}>
        {slides.map((slide, i) => (
          <section
            key={i /* fix */}
            className={slide.meta.className}
            data-bespoke-backdrop={slide.meta.background}
            data-bespoke-fx-direction={slide.meta.fx.direction}
            data-bespoke-fx-transition={slide.meta.fx.transition}
            dangerouslySetInnerHTML={{
              __html:
                (currentIndex >= i - 5 && currentIndex <= i + 5) || !lazyload
                  ? slide.context
                  : '<div />'
            }}
          />
        ))}
      </article>
    );
  }
}

export default Base;
