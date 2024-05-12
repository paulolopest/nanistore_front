import { Form } from 'react-router-dom';
import Logo from '../../Assets/Logo';

const ProductPage = () => {
	const contact = {
		first: 'Your',
		last: 'Name',
		avatar:
			'https://yt3.googleusercontent.com/ytc/AIf8zZRp1JO_LTI3Ng9iwIig_ccFdoZU_Aql9tY0fXYz=s900-c-k-c0x00ffffff-no-rj',
		twitter: 'your_handle',
		notes: 'Some notes',
		favorite: true,
	};

	return (
		<div id="contact">
			<div>
				<Logo />
			</div>

			<div>
				<h1>
					{contact.first || contact.last ? (
						<>
							{contact.first} {contact.last}
						</>
					) : (
						<i>No Name</i>
					)}{' '}
					<Favorite contact={contact} />
				</h1>

				{contact.twitter && (
					<p>
						<a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
							{contact.twitter}
						</a>
					</p>
				)}

				{contact.notes && <p>{contact.notes}</p>}

				<div>
					<Form action="edit">
						<button type="submit">Edit</button>
					</Form>
					<Form
						method="post"
						action="destroy"
						onSubmit={(event) => {
							if (!confirm('Please confirm you want to delete this record.')) {
								event.preventDefault();
							}
						}}
					>
						<button type="submit">Delete</button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;

// eslint-disable-next-line react/prop-types
function Favorite(contact) {
	// yes, this is a `let` for later
	let favorite = contact.favorite;
	return (
		<Form method="post">
			<button
				name="favorite"
				value={favorite ? 'false' : 'true'}
				aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
			>
				{favorite ? '★' : '☆'}
			</button>
		</Form>
	);
}
