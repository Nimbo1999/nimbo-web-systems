import Button from './Button';
import { Repository } from 'interfaces/Repository';

import { DateUtils } from '../utils/Date.utils';

interface PortfolioCardProps {
    imageSource: string;
    title: string;
    description: string;
    repository: Repository;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
    title,
    description,
    imageSource,
    repository,
}) => {
    return (
        <div className="portfolio-card">
            <header className="portfolio-card__header">
                <img
                    src={imageSource}
                    alt="Portfolio"
                    loading="lazy"
                    className="portfolio-card__image"
                />

                <h4 className="portfolio-card__title">{title}</h4>
            </header>

            <main className="portfolio-card__content">
                <div className="portfolio-card__meta-data">
                    <small className="portfolio-card__date">
                        {DateUtils.formatDate(new Date())}
                    </small>

                    <a
                        className="portfolio-card__link"
                        href={repository.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={`/icons/${repository.provider}.svg`}
                            className="portfolio-card__icon"
                            alt={repository.provider}
                        />
                    </a>
                </div>

                <p className="portfolio-card__description">{description}</p>

                <footer className="portfolio-card__footer">
                    <Button btnType="text" btnColor="info">
                        Show more
                    </Button>
                </footer>
            </main>
        </div>
    );
};

export default PortfolioCard;
