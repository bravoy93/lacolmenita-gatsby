import React, { useContext } from "react";
import ColmenitaIcon from "../Custom/ColmenitaIcon/ColmenitaIcon"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from '@material-ui/core/styles'
import {Link} from "gatsby"
import { ColmeIllustration } from '../Custom'
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { HomeContext } from "../../pages";

const useStyles = makeStyles((theme) => ({
    footer: {
      color: theme.palette.secondary.light,
      // background: `linear-gradient(#fff, ${theme.palette.secondary.main})`,
      background: theme.palette.primary.main,
      boxShadow: `0 -5px 10px -1px rgba(0,0,0,.2)`,
      padding: '12px',
      transition: "all 300ms ease-in",
      width: '100%'
    },
    footerRow: {
      padding: '0',
      margin: '0',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    footerCopyright: {
      padding: '20px 0',
      textAlign: 'center',
      [theme.breakpoints.only('xs')]: {
        paddingTop: '30px'
      }
    }
  })
)

const FooterItem = styled.li`
  list-style: none;  
  transition: 'all 150ms ease-in';
  & a {
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.01);
    filter: saturate(0);
  }
`

const StyledFooterSponsor = styled(FooterItem)`      
      padding: 0 24px 4px 24px;
      transition: all 150ms ease-in;      
      @media (max-width: 768px) {
        padding: 0 8px 14px 8px;
      }
`

const StyledFooterSocialMedia = styled(FooterItem)`
      padding: 4px 8px;
`
const FooterSponsor = ({name, href, image}) => (
  <StyledFooterSponsor>
    <a title={name} href={href} target="_blank" rel="noreferrer">
      <Img fixed={image.childImageSharp.fixed} alt={name} />
    </a>
  </StyledFooterSponsor>
)

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const sm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const footerSponsorsList = useContext(HomeContext)
  console.log(footerSponsorsList)

  // const FooterItem = ({type='sponsor', name, href, size= xs ? 38 : sm ? 40 : 45}) => 
  // <li className={classes[type]}>
  //   <a title={name} href={href} target="_blank" rel="noreferrer">
  //       <ColmeIllustration illustration={illustration} size={size} />
  //   </a>
  // </li>

const SponsorsContainer = ({children}) => 
  xs ?
    <>
      <ul className={classes.footerRow}>{children.slice(0,3)}</ul>
      <ul className={classes.footerRow}>{children.slice(3)}</ul>
    </>
    : <ul className={classes.footerRow}>{children}</ul>

  return (
    <div className={classes.footer}>
      <div className={classes.footerRow}>
        <Link to="/">
          <ColmenitaIcon size={xs ? 310 : 340} dark description variant="svg"/>
        </Link>
      </div>
      <SponsorsContainer>
        <FooterSponsor 
          name="Ministerio de Cultura de la República Cuba" 
          image={footerSponsorsList[`mincult${xs || sm ? '_xs' : ''}`]}
          href="http://www.mincult.gob.cu/"/>
        <FooterSponsor 
          name="Departamento de Artes Escénicas del Mincult"
          image={footerSponsorsList[`cnae${xs || sm ? '_xs' : ''}`]}
          href="http://www.cubaescena.cult.cu/"/>
        <FooterSponsor 
          name="Centro de Teatro de Cuba"
          image={footerSponsorsList[`centroTeatro${xs || sm ? '_xs' : ''}`]}
          href="http://www.cubaescena.cult.cu/"/>
        <FooterSponsor 
          name="Fondo de las Naciones Unidas para la Infancia (Unicef)"
          image={footerSponsorsList[`unicef${xs || sm ? '_xs' : ''}`]}
          href="https://www.unicef.org/"/>
        <FooterSponsor 
          name="Grupo Excelencias"
          image={footerSponsorsList[`excelencias${xs || sm ? '_xs' : ''}`]}
          href="http://www.excelencias.com/"/>
      </SponsorsContainer>
      <div className={classes.footerRow}>
  <span className={classes.footerCopyright}>© {new Date().getFullYear()} La Colmenita de Cuba. Todos los derechos reservados.</span>
      </div>
      <ul className={classes.footerRow}>
        {/* <FooterItem
          name="Página de La Colmenita en Facebook"
          href="https://www.facebook.com/La-Colmenita-de-Cuba-101503491317669/"/>
        <FooterSocialMedia
          name="Perfil de La Colmenita en Twitter"
          href="https://twitter.com/ColmenitaDe"/>
        <FooterSocialMedia
          name="Perfil de La Colmenita en Instagram"
          href="http://www.instagram.com/colmenitacubana"/>
        <FooterSocialMedia
          name="Canal de La Colmenita en Youtube"
          href="https://www.youtube.com/channel/UCkYqTQtkHILK3lVFzyq-lxA"/>
        <FooterSocialMedia
          name="Canal de La Colmenita en Telegram"
          href="https://t.me/lacolmenita"/> */}
      </ul>
    </div>
  )
}