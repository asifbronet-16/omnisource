export const ContactCard = ({ icon: Icon, title, children }) => (
    <div className="flex gap-4 group">
        <div className="w-10 h-10 border border-skin-subtle rounded-xl flex items-center justify-center flex-shrink-0 bg-skin-primary text-skin-muted group-hover:text-skin-logo group-hover:border-skin-logo/40 transition-colors duration-300">
            <Icon size={18} />
        </div>

        <div>
            <h4 className="font-bold text-base text-skin-light mb-1">
                {title}
            </h4>

            {children}
        </div>
    </div>
    
);

export const ContactInfoItem = ({ icon: Icon, children }) => {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 border border-skin-subtle rounded-xl flex items-center justify-center flex-shrink-0 bg-skin-primary text-skin-muted group-hover:text-skin-logo group-hover:border-skin-logo/40 transition-colors duration-300">
        <Icon size={18} />
      </div>

      <div className="text-sm font-semibold text-slate-200 group-hover:text-skin-light transition-colors duration-200 leading-tight">
        {children}
      </div>
    </div>
  );
};

export const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  textarea = false,
  rows = 4,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
        {label}
      </label>

      {textarea ? (
        <textarea
          rows={rows}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full bg-[#020b1e]/40 border border-blue-900/30 rounded-lg px-4 py-3 text-sm focus:border-skin-logo transition-colors outline-none text-skin-light placeholder-slate-500 resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full bg-[#020b1e]/40 border border-blue-900/30 rounded-lg px-4 py-3 text-sm focus:border-skin-logo transition-colors outline-none text-skin-light placeholder-slate-500"
        />
      )}
    </div>
  );
};