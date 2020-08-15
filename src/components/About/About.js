import React from 'react';
export default function About() {
    return (
        <>        
            <section class="col-sm-12 col-md-12 col-lg-12">
                <section class="col-sm-8 col-md-8 col-lg-8">
                    <article class="about" id="border">
                        <br/>
                            <img src="Assets/Images/about-me.png" alt="About Me"/>
                            <hr/>
                            <img src="Assets/Images/scott-house.jpg" alt="Scott House" id="about-image"/>
                            <p>
                            My name is Scott House. I am 31 years old and from Sanford, ME. I have Bachelor's Degrees in
                            Political Science and History from the University of Michigan. For the past 6 years, I have worked
                            in education, primarily teaching Title I math and literacy to elementary students. Last January, I
                            went back to school at the University of Maine to pursue Computer Engineering and Computer Science
                            degrees,but was forced to leave the program, due to a family emergency. I enjoy joshi puroresu, the
                            occasional JRPG video game, and my Maine Coon cat, Henrik Catterberg. I am currently studying full-stack design through the University of New Hampshire.
                            </p>
                    </article>
                </section>
                <aside class="col-sm-4 col-md-4 col-lg-4">
                    <section class="block col-sm-10 col-md-10 col-lg-10" id="border">
                        <article class="logo col-sm-12 col-md-12 col-lg-12 ">
                            <br/>
                            <img src="Assets/Images/links.png" alt="Links"/>
                            <br/>
                        </article>
                            <hr/>
                        <article class="links">
                            <a href="https://github.com/sehouse">
                                <img src="Assets/Images/github.png" alt="GitHub"/>
                                <br/>
                            </a>
                            <p>
                            Scott House's Github
                            </p>
                        </article>

                        <article class="links">
                            <a href="https://www.linkedin.com/in/sehouse/">
                                <img src="Assets/Images/linkedin.png" alt="LinkedIn"/>
                                <br/>
                            </a>
                            <p>
                            Scott House's LinkedIn
                            </p>
                        </article>

                        <article class="links">
                            <a href="Assets/Resume/scott-house-resume.pdf">
                                <img src="Assets/Images/resume.png" alt="Resume"/>
                            </a>
                            <br/>
                            <p>
                            Resume
                            </p>
                        </article>
                    </section>
                 </aside>
            </section>
        </>
    );
}