function showHamburgerMenu ()
{
	const hamburgerMenu = document.getElementById( "nav-buttons" )
	if ( hamburgerMenu.style.display === "flex" )
	{
		document.getElementById( "logo" ).style.display = "block"
		hamburgerMenu.style.display = "none"
	} else
	{
		hamburgerMenu.style.display = "flex"
		document.getElementById( "logo" ).style.display = "none"
	}
}