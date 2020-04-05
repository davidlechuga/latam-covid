import React, { Fragment } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, ButtonBase, IconButton, Toolbar, useMediaQuery } from '@material-ui/core';
import { MdMenu } from 'react-icons/md';
import '../style/layout.css';

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(1)
	},
	titleButton: {
		padding: '20px',
		borderRadius: '4px',
		transition: 'background-color .125s ease',
		'&:hover': {
			backgroundColor: 'rgba(0,0,0,0.25)'
		},
		'&:first-child': {
			// Site title.
			fontFamily: 'Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif'
		}
	}
}));

const AppBarLinks = ({ links }) => {
	const classes = useStyles();

	return links.map((link) => {
		return (
			<Fragment>
				<ButtonBase component={Link} to={link.url} classes={{ root: classes.titleButton }} key={link.title}>
					{link.title}
				</ButtonBase>
			</Fragment>
		);
	});
};

export default ({ elevation = 1, onToggleDrawer }) => {
	const classes = useStyles();
	const isXs = useMediaQuery((theme) => theme.breakpoints.down('xs'));

	return (
		<StaticQuery
			query={graphql`
				{
					site {
						siteMetadata {
							title
							components {
								appbar {
									position
									links {
										title
										url
									}
								}
							}
						}
					}
				}
			`}
			render={({ site: { siteMetadata: { title, components: { appbar: { links, position } } } } }) => (
				<AppBar color="primary" position={position} elevation={elevation}>
					<Toolbar>
						{isXs && (
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={onToggleDrawer}
							>
								<MdMenu />
							</IconButton>
						)}
						<Box display="flex" flexGrow={1}>
							<ButtonBase component={Link} to="/" classes={{ root: classes.titleButton }}>
								{title}
							</ButtonBase>

							<ButtonBase>
								<button id="coffe">
									<a
										style={{
											marginLeft: '15px',
											fontSize: '15px',
											position: 'relative',
											bottom: '27px'
										}}
										role="img"
										href="https://ko-fi.com/coronantine"
									>
										{' '}
										Take a coffe with us ! ❤️{' '}
									</a>
								</button>
							</ButtonBase>

							<ButtonBase
								style={{
									height: '30px',
									marginRight: '15px',
									width: '100%',
									padding: '0px',
									fontsize: '16px',
									transition: 'all ease .5s',
									':hover': { cursor: 'pointer', backgroundColor: 'rgba(0, 0, 0, 0.25)' }
								}}
								id="google_translate_element"
							/>
						</Box>
						{// Display the appbar action links if the media query breakpoint is larger than Xs.
						!isXs && <AppBarLinks links={links} />}
					</Toolbar>
				</AppBar>
			)}
		/>
	);
};
