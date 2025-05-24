import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const testimonialList = [
	{
		author: {
			fullName: "Akshay Kumar",
			picture: "https://cdn.easyfrontend.com/pictures/users/user28.jpg",
			designation: "Founder / CEO",
		},
		rating: 3.5,
		description:
			"Land. Stars land every there was together very fifth, above greater also replenish seas good was second divide which beast abundantly blessed don't fifth us given make called gathering fowl. The gathered, hath. Which appear said there saw fish so Above. Light made is sea yielding let he that whose.",
	},
	{
		author: {
			fullName: "Raima Sen",
			picture: "https://cdn.easyfrontend.com/pictures/users/user7.jpg",
			designation: "Business Head",
		},
		rating: 4,
		description:
			"Heaven day created don't kind darkness that which midst us created every. Shall good brought grass that bearing said fowl sixth them abundantly. Dominion. Every gathering so said forth doesn't all from. It tree. Have subdue third let void let gathering creepeth. Be saw appear. Day every it fruitful life.",
	},
	{
		author: {
			fullName: "Arjun Kapur",
			picture: "https://cdn.easyfrontend.com/pictures/users/user26.jpg",
			designation: "UI Design",
		},
		rating: 5,
		description:
			"It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("mb-6", className)} {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon icon={faStar} className="text-yellow-500" />
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-200 dark:text-opacity-20"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ testimonial, index }) => (
	<div id="Testimonials" className="grid grid-cols-12 gap-6 mt-12" >
		<div
			className={`col-span-12 md:col-span-5 ${index % 2 !== 0 && "md:order-2"}`}
		>
			<img
				src={testimonial.author.picture}
				alt={testimonial.author.fullName}
				className="w-full  p-5 rounded-[50px]"
			/>
		</div>
		<div
			className={`col-span-12 md:col-span-6 ${
				index % 2 === 0 && "md:col-start-7"
			}`}
		>
			<div className="flex flex-col justify-center h-full">
				<h4 className="text-2xl font-medium mb-1">
					{testimonial.author.fullName}
				</h4>
				<p className="mb-1">{testimonial.author.designation}</p>
				<Rating rating={testimonial.rating} showLabel={false} />
				<p className="mb-6">
					<span className="fas fa-star text-yellow-500"></span>
					<span className="fas fa-star text-yellow-500"></span>
					<span className="fas fa-star text-yellow-500"></span>
					<span className="fas fa-star-half-alt text-yellow-500"></span>
					<span className="fas fa-star text-yellow-200 dark:text-opacity-20"></span>
				</p>
				<p className="opacity-50 lg:pr-20">{testimonial.description}</p>
			</div>
		</div>
	</div>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const Testimonial4 = () => {
	return (
		<section className="ezy__testimonial4 dark py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center mb-6 md:mb-12">
					<div className="sm:max-w-lg text-center">
						<h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
							Community Reviews
						</h2>
						<p>
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at qui.
						</p>
					</div>
				</div>

				{testimonialList.map((testimonial, i) => (
					<TestimonialItem testimonial={testimonial} index={i} key={i} />
				))}
			</div>
		</section>
	);
};
export default Testimonial4