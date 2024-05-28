//your JS code here. If required.
<!DOCTYPE html>

<html>

<head>
	<link rel="stylesheet" href="styles.css">
</head>

<body>
	<!-- the entire body must be written by student -->
	<div class="container">
		<header class="header">Shaw's News</header>
		<div class="articles-section">
			<div class="latest-news-section">
				<h3>Latest News Articles</h3>
				<ul>
					<li>Article 1</li>
					<li>Article 2</li>
					<li>Article 3</li>
				</ul>
			</div>
			<div class="main-article-section">
				<h2>Main Article</h2>
				<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
			</div>
			<div class="pictorial-news-section">
				<h3>Pictorial News</h3>
				<div class="img-section">
				<img width=200px; src="https://images.hindustantimes.com/img/2023/01/29/550x309/delhi_rains_1674974112847_1674981888135_1674981888135.jpeg" alt="img1"/>
				<img width=200px; src="https://images.hindustantimes.com/img/2023/01/29/550x309/ADANI-INDIA-GAUTAM-ADANI-0_1675011651023_1675011651023_1675011672003_1675011672003.JPG" alt="img1"/>
				<img width=200px; src="https://images.hindustantimes.com/img/2023/01/29/550x309/FRANCE-REFORM-PENSIONS-31_1675022359706_1675022359706_1675022383851_1675022383851.JPG" alt="img1"/>
				</div>
			</div>
		</div>
	</div>
	
    <script type="text/javascript" src="./script.js">
</script>

</body>

</html>

// css====>
/*  your css code here. If applicable */
body{
	font-family:Arial;
	background-color:#f5f5f5;
}
.articles-section{
	display:flex;
	gap:4px;
	align-items:flex-start;
}
.header{
	padding:10px;
	text-align:center;
	font-weight:700;
	font-size:1.5em;
	color:white;
	background-color:#011e29;
}

.latest-news-section{
	margin-top:10px;
	padding:15px;
	flex:1;
}
.main-article-section{
	margin-top:10px;
	padding:15px;
	flex:2;
	
}
.pictorial-news-section{
	margin-top:10px;
	padding:15px;
	flex:1;

}
.img-section{
	/* margin-top:10px; */
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	gap:10px;
}

.latest-news-section,.main-article-section,.pictorial-news-section{
	/* padding:5px; */
	text-align:center;
	background-color:white;
	border-radius:20px;
}