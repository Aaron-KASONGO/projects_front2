const Router = window.ReactRouterDOM.BrowserRouter;
const Link = window.ReactRouterDOM.Link;
const Route = window.ReactRouterDOM.Route;
const Switch = window.ReactRouterDOM.Switch;

class Upload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dropped: false,
			onDrag: false,
			file: null
		}
	}

	onDragEnter = () => {
		console.log("Merci d'entrer");
		this.setState({
			onDrag: true
		})
	}

	onDragLeave = () => {
		console.log("Merci de sortir");
		this.setState({
			onDrag: false
		})
	}

	onDrop = (e) => {
		e.preventDefault();
		console.log(e.target.files[0]);
		this.setState({
			dropped: true,
			onDrag: false,
			file: e.target.files[0]
		});
	}

	onChange = (e) => {
		this.setState({
			dropped: true,
			file: e.target.files[0]
		})
	}

	onSend = (e) => {
		e.preventDefault();
		let data = new FormData();
		axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
		axios.defaults.xsrfCookieName = "csrftoken"

		console.log(this.state.file);

		data.append('file', this.state.file);

		axios.post('/', data, {
			headers: {
				'Content-Type': 'multipart/form-data'
			  }
		})
			.then(result => console.log(result))
			.catch(errors => console.log(errors))
	}

    render() {
        return (
			<div className="container">
				<div className="row align-items-center vh-100">
					<div className="col-12 col-md-6 offset-md-3">
						<div className="card shadow-sm border-blue-color">
						<div className="card-title text-center mt-2 text-muted">Analysez vos documents</div>
							{
								this.state.dropped ?
								<div className="d-flex flex-column justify-content-center align-items-center">
									<p>Merci d'avoir Uploadé !</p>
									<div>
										<button className="btn btn-primary" onClick={(e) => this.onSend(e)}>Analysez</button>
									</div>
								</div>
								:
								<div
									onDragEnter={() => this.onDragEnter()}
									onDragLeave={() => this.onDragLeave()}
									onDrop={(e) => this.onDrop(e)}
									className={this.state.onDrag ? "card-body d-flex justify-content-center m-3 border-dashed bg-blue text-muted dragover drag-enter" : "card-body d-flex justify-content-center m-3 border-dashed bg-blue text-muted dragover"}
								>
									<img src="static/img/Stuck at Home - To Do List.png" className="card-img img-fluid upload-img" alt="Upload image" />
									<input type="file" accept="application/pdf" name="file" id="file" className="position-absolute w-75 h-75 input-field" onChange={(e) => this.onChange(e)} />
								</div>
							}
							
						</div>
					</div>
				</div>
			</div>
        )
    }
}

class Home extends React.Component {
	render() {
		return (
			<div>
				<nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
					<div class="container">
						<div class="navbar-brand navbar-text">
							Anti-plagiat
						</div>
						<ul class="navbar-nav flex-nowrap ms-auto">
							<div class="d-none d-sm-block topbar-divider"></div>
							<li>
								
							</li>
							<li class="nav-item dropdown no-arrow">
								<div class="nav-item dropdown no-arrow"><span class="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span><img class="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg" />
								</div>
							</li>
						</ul>
					</div>
				</nav>
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-3">
							<div class="card">
								<div class="card-body">
									<h4 class="card-title mb-3">Documents récents</h4>
									<div class="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
										<div>
											<a href="#" class="h5">Titre du Document</a>
											<p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
											<hr class="my-1" />
										</div>
										<div>
											<a href="#" class="h5">Titre du Document</a>
											<p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
											<hr class="my-1" />
										</div>
										<div>
											<a href="#" class="h5">Titre du Document</a>
											<p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
											<hr class="my-1" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<h4 class="mb-3">Résultats</h4>
							<div class="d-flex align-items-center align-items-md-start align-items-xl-center">
								<div class="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl">
									<span class="fs-4">
										75%
									</span>
								</div>
								<div>
									<p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p><a href="#">Ouvrir fichier&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-right">
											<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
										</svg></a>
								</div>
							</div>
							<hr class="my-5" />
							<div class="d-flex align-items-center align-items-md-start align-items-xl-center">
								<div class="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl">
									<span class="fs-4">
										75%
									</span>
								</div>
								<div>
									<p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p><a href="#">Ouvrir fichier&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-right">
											<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
										</svg></a>
								</div>
							</div>
							<hr class="my-5" />
							<div class="d-flex align-items-center align-items-md-start align-items-xl-center">
								<div class="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl">
									<span class="fs-4">
										75%
									</span>
								</div>
								<div>
									<p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p><a href="#">Ouvrir fichier&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-right">
											<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
										</svg></a>
								</div>
							</div>
							<hr class="my-5" />
							<div class="d-flex align-items-center align-items-md-start align-items-xl-center">
								<div class="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl">
									<span class="fs-4">
										75%
									</span>
								</div>
								<div>
									<p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p><a href="#">Ouvrir fichier&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-right">
											<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
										</svg></a>
								</div>
							</div>
							<hr class="my-5" />
						</div>
						<div class="col-md-3">
							<div class="card">
								<div class="card-body">
									<h4 class="card-title mb-3">Autres liens</h4>
									<div class="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
									
											<a href="#" class="h5">Titre du lien</a>
											<p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
											<hr class="my-1" />
											<a href="#" class="h5">Titre du lien</a>
											<p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
											<hr class="my-1" />
											<a href="#" class="h5">Titre du lien</a>
											<p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
											<hr class="my-1" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		)
	}
}

	


class App extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/" exact component={Home} />
				<Route path="/upload" component={Upload} />
			</Router>
		)
	}
}

	


ReactDOM.createRoot(document.getElementById("root")).render(<App />)