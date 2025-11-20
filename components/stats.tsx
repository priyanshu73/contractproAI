export function Stats() {
  const stats = [
    { value: '10,000+', label: 'Active Contractors' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '45%', label: 'Increase in Closed Deals' },
    { value: '12hrs', label: 'Saved Per Week' },
  ]
  
  return (
    <section className="py-16 px-4 border-y border-border bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
