import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
const Experience = () => {
	return (
		<section id="experience">
			Experience
			<h5>My Skills</h5>
			<h2>My Experience</h2>
			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill />
							<h4>HTML</h4>
							<small className="text-light">Intermediate</small>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill />
							<h4>CSS</h4>
							<small className="text-light">Intermediate</small>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill />
							<h4>JavaScript</h4>
							<small className="text-light">Intermediate</small>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill />
							<h4>Bootstrap</h4>
							<small className="text-light">Basic</small>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill />
							<h4>React</h4>
							<small className="text-light">Basic</small>
						</article>
					</div>
				</div>
				{/*END OF FRONTEND */}
				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill />
							<h4>Node JS</h4>
							<small className="text-light">Intermediate</small>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill />
							<h4>MongoDB</h4>
							<small className="text-light">Basic</small>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill />
							<h4>Postgresql</h4>
							<small className="text-light">Intermediate</small>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill />
							<h4>MySql</h4>
							<small className="text-light">Basic</small>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill />
							<h4>Scala</h4>
							<small className="text-light">Experienced</small>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill />
							<h4>Python</h4>
							<small className="text-light">Experienced</small>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
