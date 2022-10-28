import { useEffect, useState } from 'react';

import { Button, ServiceCard, PortfolioCard } from '@/components';
import { Project } from '@/interfaces/Project';
import { firestoreService } from '@/firebase';
import { ProjectsServiceImpl } from '@/services/ProjectsService/ProjectServiceImpl';

const IndexPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const runEffect = async () => {
            const projectsService = new ProjectsServiceImpl(firestoreService);
            setProjects(await projectsService.getAllProjects());
        };
        runEffect();
    }, []);

    return (
        <div className="container">
            <div className="hero">
                <main className="hero__text-content">
                    <h4 className="hero__title h4">Let&apos;s build your UI/UX solution</h4>
                    <span className="hero__sub-title">Nimbo web systems</span>
                </main>

                <Button type="button">Let&apos;s Start!</Button>

                <img src="/hero-down-wave.svg" alt="Hero Wave" className="wave" />
            </div>

            <section className="section-about">
                <h4 className="heading-5 heading-5--gradient mb-4">About the team</h4>

                <div className="team-member mb-4">
                    <header className="team-member__header">
                        <img src="/me.jpg" alt="Matheus Lopes" className="team-member__image" />

                        <div className="team-member__header-content">
                            <h5 className="team-member__name subtitle-1">Matheus Lopes</h5>
                            <h5 className="team-member__role body-2">Frontend Developer</h5>

                            <div className="team-member__icon-wrapper">
                                <a
                                    className="team-member__link"
                                    href="https://github.com/Nimbo1999"
                                >
                                    <img
                                        src="/icons/github.svg"
                                        className="team-member__icon"
                                        alt="github"
                                    />
                                </a>

                                <a className="team-member__link" href="https://gmail.com">
                                    <img
                                        src="/icons/mail.svg"
                                        className="team-member__icon"
                                        alt="email"
                                    />
                                </a>

                                <a
                                    className="team-member__link"
                                    href="https://www.linkedin.com/in/matheuslopes1999/"
                                >
                                    <img
                                        src="/icons/linkedin.svg"
                                        className="team-member__icon"
                                        alt="linkedin"
                                    />
                                </a>
                            </div>
                        </div>
                    </header>

                    <main className="team-member__content body-1">
                        Senior Frontend developer, working with the actual best technologies and
                        patterns to propose a high quality User Interfaces and User Experience
                    </main>
                </div>

                <Button type="button">Contact me</Button>

                <img
                    src="/about-upper-wave.svg"
                    alt="About Wave"
                    className="wave wave--translate-bottom"
                />
            </section>

            <section className="section-services">
                <h4 className="heading-5 heading-5--gradient mb-4">Services</h4>

                <div className="section-services__content">
                    <ServiceCard
                        title="Solid prototypes"
                        description="Start your system with a beautiful prototype. We can create your Design System, Components, Layouts and your final prototype result with the help of a powerful tool called Figma"
                        imageSource="icons/spa-app.svg"
                    />

                    <ServiceCard
                        title="Responsive Design"
                        description="Reach all users and devices with a responsive design approach. Users that use mainly phones, desktops or even more, will enjoy your system"
                        imageSource="icons/responsive-design.svg"
                    />

                    <ServiceCard
                        title="Mobile App"
                        description="Create a version of your Web app or Desktop app to Mobile app and provide it through Play Store and App Store"
                        imageSource="icons/mobile-app.svg"
                    />
                </div>
            </section>

            <section className="section-portfolio">
                <h4 className="heading-5 mb-4">Portfolio</h4>

                <div className="section-portfolio__content">
                    {projects.map((project) => (
                        <PortfolioCard
                            key={project.id}
                            title={project.name}
                            description={project.description}
                            imageSource={project.image}
                            repository={project.repository}
                            date={project.date}
                        />
                    ))}

                    {/* <Button type="button" btnColor="primary">
                        See all
                    </Button> */}
                </div>
            </section>
        </div>
    );
};

export default IndexPage;
