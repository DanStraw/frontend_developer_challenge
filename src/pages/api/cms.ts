export default (req, res) => {
    res.statusCode = 200;

    res.json({
        header: 'Star Map Challenge',
        message: 'Thank you for the Opportunity!',
        content: 'January 05, 2021',
        cta: 'San Diego, CA',
        coords: '32.7157° N, 117.1611° W',
        src: '/images/hero-2.png'
    });
}