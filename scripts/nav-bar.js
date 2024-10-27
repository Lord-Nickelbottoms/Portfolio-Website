function showHamburgerMenu ()
{
	let hamburgerMenu = document.getElementById( "nav-buttons" )
	if ( hamburgerMenu.style.display === "none" )
	{
		hamburgerMenu.style.display = "flex"
	} else
	{
		hamburgerMenu.style.display = "none"
	}
}