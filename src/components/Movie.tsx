import { forwardRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../scss/components/Movie.scss';

interface MovieProps {
  id: number;
  title: string;
  posterUrl: string;
  score: number;
};

const Movie = forwardRef((props: MovieProps, ref?: React.Ref<HTMLLIElement>) => {
  const { id,
          title, 
          posterUrl,
          score } = props;

  return (
    <li ref={ref}>
      <Link 
        aria-label={title}
        className="movie rounded" 
        to={`details/${id}`}
      >
        <img src={posterUrl} alt={`${title} poster`} />
        <h2>{title}</h2>
        <span className="h2">{score}</span>
      </Link>
    </li>
  );
});

export default connect(null, null, null, { forwardRef: true })(Movie);
