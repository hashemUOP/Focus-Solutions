
export default function VerticalDivider({ thickness = '1px', color = 'gray'}) {
  return (
    <div style={{
        width: thickness,
        backgroundColor: color,
        alignSelf: 'stretch',
    }} />
  )
}
