tailwind.config = {
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                primary: 'var(--primary)',
                primaryHover: 'var(--primaryHover)',
                secondary: 'var(--secondary)',
                secondaryHover: 'var(--secondaryHover)',
                tertiary: 'var(--tertiary)',
                primaryTitle: 'var(--primaryTitle)',
                textClr: 'var(--textClr)',
                black: 'var(--black)',
            },
            spacing: {
                '10': '1rem',
                '20': '2rem',
                '30': '3rem',
                '40': '4rem',
                '70': '6rem',
                '100': '10rem',
                '130': '10rem',
               
            },
            gap:{
                '30': '3rem',
            },
            fontFamily: {
                sans: 'var(--font-secondary)',
                serif: 'var(--font-primary)', 
            },
           
            container:{
                center: true,
                screens: {
                    sm: '600px',
                    md: '728px',
                    lg: '984px',
                    xl: '1240px',
                    '2xl': '1440px',
                  },
                  padding: '2rem',
                  
            },
            flexBasis: {
                
            },
            fontSize: {
                h1: '5rem',
                h2: '4rem',
                h3: '3rem',
                h4: '2rem',
                h5: '1.8rem',
                h6: '1.6rem',
            },
          
            fontWeight: {
                thin: '100',
                extralight: '200',
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
                black: '900',
              },

              borderRadius: {
                '20': '2rem',
                
              }
        },
        

    },
}