interface ServiceCartProps {
    imageSource: string;
    title: string;
    description: string;
}

const ServiceCart: React.FC<ServiceCartProps> = ({ imageSource, title, description }) => {
    return (
        <div className="service-card">
            <img src={imageSource} alt={title} className="service-card__image" />

            <h5 className="service-card__title heading-5">{title}</h5>

            <p className="service-card__description body-1">{description}</p>
        </div>
    );
};

export default ServiceCart;
