import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link,
} from '@react-pdf/renderer'

const CARD_WIDTH = 252 // ~88.9mm
const CARD_HEIGHT = 144 // ~50.8mm

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#161b22',
    padding: 12,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '0.5pt solid #30363d',
  },
  // Header
  header: {
    marginBottom: 6,
  },
  name: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  title: {
    fontSize: 7,
    color: '#2dd4bf',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  // Contact info
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderBottom: '0.5pt solid #30363d',
    paddingBottom: 6,
  },
  linkText: {
    fontSize: 6,
    color: '#c9d1d9',
    textDecoration: 'none',
  },
  // Stack
  stackSection: {
    flexGrow: 1,
  },
  badgeGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    marginTop: 4,
  },
  badge: {
    height: 10,
  },
  // Footer
  footer: {
    marginTop: 6,
    paddingTop: 4,
    borderTop: '0.5pt solid #30363d',
  },
  footerText: {
    fontSize: 5.5,
    color: '#8b949e',
    textAlign: 'center',
    fontStyle: 'italic',
  },
})

export const BusinessCardPDF = ({
  badges,
}: {
  badges: Array<{ name: string; url: string }>
}) => (
  <Document title={`Business Card - Heric Rodrigues`}>
    <Page size={[CARD_WIDTH, CARD_HEIGHT]} style={styles.cardContainer}>
      <View>
        <View style={styles.header}>
          <Text style={styles.name}>Heric Leite Rodrigues</Text>
          <Text style={styles.title}>Full Stack Software Engineer</Text>
        </View>

        <View style={styles.contactRow}>
          <Link src="mailto:dev.heric.rodrigues@gmail.com">
            <Text style={styles.linkText}>dev.heric.rodrigues@gmail.com</Text>
          </Link>
          <Link src="https://github.com/rodrigues-heric">
            <Text style={styles.linkText}>GitHub</Text>
          </Link>
          <Link src="https://www.linkedin.com/in/rodriguesheric/">
            <Text style={styles.linkText}>LinkedIn</Text>
          </Link>
        </View>

        <View style={styles.stackSection}>
          <View style={styles.badgeGrid}>
            {badges.map((b) => (
              <Image key={b.name} src={b.url} style={styles.badge} />
            ))}
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Specialist in creating scalable and resilient systems, from Front-end
          to Back-end.
        </Text>
      </View>
    </Page>
  </Document>
)
